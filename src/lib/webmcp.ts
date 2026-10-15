/** Optional native WebMCP integration. Browsers without the API keep the normal UI. */
type Tool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => unknown;
  annotations?: { readOnlyHint: boolean };
};

type ModelContext = {
  registerTool: (tool: Tool, options: { signal: AbortSignal }) => void | Promise<void>;
};

export function registerWebTools(tools: Tool[]): () => void {
  // The current API lives on Document; older previews exposed it on Navigator.
  const context = (document as Document & { modelContext?: ModelContext }).modelContext
    ?? (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
  if (!context?.registerTool) return () => {};

  const controller = new AbortController();
  for (const tool of tools) {
    void Promise.resolve().then(() => {
      if (!controller.signal.aborted) {
        return context.registerTool(tool, { signal: controller.signal });
      }
    }).catch((error: unknown) => {
      controller.abort();
      console.warn('Portfolio WebMCP registration failed:', error);
    });
  }
  return () => controller.abort();
}

export function publicPageState() {
  const heading = document.querySelector('h1');
  return {
    path: location.pathname,
    title: document.title,
    theme: document.documentElement.classList.contains('light') ? 'light' : 'dark',
    heading: heading?.textContent?.trim() ?? null,
    headingColor: heading ? getComputedStyle(heading).color : null,
    surfaceColor: getComputedStyle(document.body).backgroundColor,
    reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}
