// Protocol-level integration check: no model, screenshots or application credentials.
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chromeArgs = ['-y', 'chrome-devtools-mcp@1.11.0', '--headless', '--isolated',
  '--categoryExperimentalWebmcp', '--chromeArg=--enable-features=WebMCP',
  '--no-usage-statistics', '--no-performance-crux'];

function client(command, args, shell = false) {
  const child = spawn(command, args, { cwd: root, shell, windowsHide: true,
    stdio: ['pipe', 'pipe', 'pipe'], env: { ...process.env, E2E_TELEMETRY_DISABLED: '1', DO_NOT_TRACK: '1' } });
  let id = 0;
  let stderr = '';
  const pending = new Map();
  child.stderr.on('data', chunk => { stderr = (stderr + chunk).slice(-2000); });
  const fail = error => { for (const request of pending.values()) request.reject(error); pending.clear(); };
  child.on('error', fail);
  child.on('exit', code => fail(new Error(`MCP exited (${code}): ${stderr}`)));
  createInterface({ input: child.stdout }).on('line', line => {
    let message;
    try { message = JSON.parse(line); } catch { return; }
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(JSON.stringify(message.error)));
    else request.resolve(message.result);
  });
  const send = message => child.stdin.write(`${JSON.stringify(message)}\n`);
  const request = (method, params) => new Promise((resolve, reject) => {
    const requestId = ++id;
    const timer = setTimeout(() => { pending.delete(requestId); reject(new Error(`Timeout: ${method}. ${stderr}`)); }, 120_000);
    pending.set(requestId, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: error => { clearTimeout(timer); reject(error); } });
    send({ jsonrpc: '2.0', id: requestId, method, params });
  });
  return {
    async init() {
      const info = await request('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'portfolio-mcp-check', version: '1.0.0' } });
      send({ jsonrpc: '2.0', method: 'notifications/initialized' });
      return info.serverInfo;
    },
    list: () => request('tools/list', {}),
    async call(name, args = {}) {
      const result = await request('tools/call', { name, arguments: args });
      if (result.isError) throw new Error(`${name}: ${JSON.stringify(result.content).slice(0, 1800)}`);
      return result;
    },
    async close() {
      child.stdin.end();
      if (child.exitCode === null) await Promise.race([
        new Promise(resolve => child.once('exit', resolve)),
        new Promise(resolve => { const timer = setTimeout(() => { child.kill(); resolve(); }, 3000); timer.unref(); }),
      ]);
    },
  };
}

const text = result => result.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') ?? '';
const summary = { checkedAt: new Date().toISOString(), e2e: {}, webmcp: {} };
const sharedE2e = path.join(homedir(), '.local/share/e2e-mcp/mcp.mjs');
const e2eArgs = existsSync(sharedE2e) ? [sharedE2e] : [path.join(root, 'node_modules/e2e/dist/cli/bin.js'), 'mcp', '--headless'];
summary.e2e.launcher = e2eArgs[0];
const e2e = client(process.execPath, e2eArgs);
try {
  summary.e2e.server = await e2e.init();
  summary.e2e.tools = (await e2e.list()).tools.map(t => t.name);
  await e2e.call('open_session', { config: path.join(root, 'e2e.config.ts'), target: 'web' });
  const result = await e2e.call('call', { tool: 'locate', args: { role: 'heading', name: 'Compiled Visions.', exact: true } });
  summary.e2e.heading = text(result).slice(0, 500);
  // Keep the inspection session open while Chrome checks the same running app.
  // All shell arguments below are fixed constants, with no user-supplied text.
  const chrome = client(process.platform === 'win32' ? 'npx.cmd' : 'npx', chromeArgs, process.platform === 'win32');
  try {
  summary.webmcp.server = await chrome.init();
  const tools = (await chrome.list()).tools;
  summary.webmcp.toolsAvailable = tools.some(t => t.name === 'list_webmcp_tools') && tools.some(t => t.name === 'execute_webmcp_tool');
  if (!summary.webmcp.toolsAvailable) throw new Error('WebMCP tools are missing from Chrome MCP');
  const opened = await chrome.call('new_page', { url: 'http://localhost:4322/' });
  const pageLine = text(opened).split('\n').find(line => line.includes('http://localhost:4322'));
  const pageId = Number(pageLine?.match(/^\s*(\d+):/)?.[1]);
  if (!Number.isFinite(pageId)) throw new Error(`Cannot identify the portfolio tab: ${text(opened)}`);
  summary.webmcp.native = text(await chrome.call('evaluate_script', { pageId, function: `async () => {
    const context = document.modelContext ?? navigator.modelContext;
    const deadline = performance.now() + 15000;
    if (!context?.getTools) return { url: location.href, browser: navigator.userAgent, available: !!context, documentAPI: !!document.modelContext, getTools: false };
    let tools = [];
    do {
      tools = await context.getTools();
      if (tools.some(t => t.name === 'portfolio_browse_projects')) break;
      await new Promise(requestAnimationFrame);
    } while (performance.now() < deadline);
    return { available: true, documentAPI: !!document.modelContext, tools: tools.map(t => t.name) };
  }` }));
  const listed = await chrome.call('list_webmcp_tools', { pageId });
  summary.webmcp.catalog = text(listed);
  if (!summary.webmcp.catalog.includes('portfolio_browse_projects')) {
    const logs = await chrome.call('list_console_messages', { pageId, types: ['warn', 'error'] });
    throw new Error(`Portfolio tools not registered: ${summary.webmcp.native}\n${text(logs).slice(0, 2000)}`);
  }
  const invoke = async (toolName, input) => {
    const result = JSON.parse(text(await chrome.call('execute_webmcp_tool', { pageId, toolName, input: JSON.stringify(input) })));
    if (result.status !== 'Completed' || result.output?.error) throw new Error(`WebMCP ${toolName} failed: ${JSON.stringify(result)}`);
    return result.output;
  };
  summary.webmcp.light = await invoke('portfolio_set_theme', { theme: 'light' });
  if (summary.webmcp.light.theme !== 'light') throw new Error('Light theme was not applied');
  summary.webmcp.projects = await invoke('portfolio_browse_projects', { category: 'web-dev', layout: 'list' });
  if (summary.webmcp.projects.category !== 'web-dev' || summary.webmcp.projects.layout !== 'list' || !summary.webmcp.projects.projects.length) throw new Error('WebMCP filtering returned an invalid result');
  summary.webmcp.rendered = text(await chrome.call('evaluate_script', { pageId, function: `() => ({
    hasWebProject: !!document.querySelector('a[href="/projects/inti-web"]'),
    hasSystemsProject: !!document.querySelector('a[href="/projects/inti-pm"]'),
    layout: localStorage.getItem('portfolio-layout')
  })` }));
  const rendered = JSON.parse(summary.webmcp.rendered.match(/\x60\x60\x60json\s*([\s\S]*?)\x60\x60\x60/)?.[1] ?? '{}');
  if (!rendered.hasWebProject || rendered.hasSystemsProject || rendered.layout !== 'list') throw new Error('WebMCP results do not match the rendered UI');
  summary.webmcp.state = await invoke('portfolio_get_state', {});
  summary.webmcp.dark = await invoke('portfolio_set_theme', { theme: 'dark' });
  if (summary.webmcp.dark.theme !== 'dark') throw new Error('Dark theme was not restored');
  await invoke('portfolio_browse_projects', { category: 'all', layout: 'cards' });
  } finally { await chrome.close(); }
  await e2e.call('close_session');
} finally { await e2e.close(); }

await mkdir(path.join(root, '.e2e'), { recursive: true });
await writeFile(path.join(root, '.e2e/mcp-smoke.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify({ e2e: 'passed', webmcp: 'passed', report: '.e2e/mcp-smoke.json' }));
