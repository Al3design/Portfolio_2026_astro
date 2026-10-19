/** Bounded afterglow for the hexagonal variant; square mode keeps its helper. */
export function setupHexagonalGridPointer(): () => void {
  const grid = document.querySelector<HTMLElement>('[data-energy-pattern="hexagonal"]');
  const light = grid?.querySelector<HTMLElement>('.eg-spot--primary');
  if (!grid || !light) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const lifetime = 2200;
  const points: { node: HTMLDivElement; born: number; strength: number }[] = [];
  const waves: { node: HTMLDivElement; born: number }[] = [];
  const waveLifetime = 1500;
  let intensity = 0;
  let hotCell: HTMLDivElement | undefined;
  let lastMovedAt = -Infinity;
  let tracking: AbortController | undefined;
  let frame = 0, previousTime = 0, slot = 0;
  let driven = false, inside = false, departedAt = 0;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let lastSampleX = 0, lastSampleY = 0, lastSampleAt = 0;

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  };
  const reset = () => {
    stop();
    driven = inside = false;
    slot = 0;
    lastSampleAt = 0;
    lastMovedAt = -Infinity;
    intensity = 0;
    if (hotCell) hotCell.style.opacity = '0';
    for (const wave of waves) {
      wave.born = -Infinity;
      wave.node.style.opacity = '0';
    }
    for (const point of points) {
      point.born = -Infinity;
      point.node.style.opacity = '0';
    }
    light.removeAttribute('data-pointer-driven');
    for (const key of ['--eg-pointer-x', '--eg-pointer-y', '--hex-tip-opacity']) light.style.removeProperty(key);
  };
  const sample = (now: number) => {
    const point = points[slot];
    if (!point) return;
    point.born = now;
    point.strength = intensity;
    point.node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    point.node.style.setProperty('--hex-trail-mask-x', `${(90 - x % 84).toFixed(3)}px`);
    point.node.style.setProperty('--hex-trail-mask-y', `${(90 - y % 48.4974226).toFixed(3)}px`);
    slot = (slot + 1) % points.length;
    lastSampleX = x; lastSampleY = y; lastSampleAt = now;
  };
  const requestTick = () => { if (!frame) frame = requestAnimationFrame(tick); };
  const tick = (now: number) => {
    frame = 0;
    if (document.hidden || reducedMotion.matches || !finePointer.matches) return;
    // Bound writes to roughly 60 Hz even on high-refresh displays.
    if (previousTime && now - previousTime < 1000 / 60 - 0.75) { requestTick(); return; }
    if (!driven) {
      const transform = getComputedStyle(light, '::before').transform;
      const position = new DOMMatrixReadOnly(transform === 'none' ? undefined : transform);
      x = position.e; y = position.f;
      light.setAttribute('data-pointer-driven', '');
      driven = true;
    }
    const elapsed = previousTime ? Math.min(now - previousTime, 50) : 1000 / 60;
    previousTime = now;
    const amount = 1 - Math.exp(-elapsed / 85);
    const oldX = x, oldY = y;
    x += (targetX - x) * amount;
    y += (targetY - y) * amount;
    const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < 0.25;
    if (settled) { x = targetX; y = targetY; }
    light.style.setProperty('--eg-pointer-x', `${x.toFixed(2)}px`);
    light.style.setProperty('--eg-pointer-y', `${y.toFixed(2)}px`);
    const speed = Math.hypot(x - oldX, y - oldY) / elapsed;
    const heat = Math.max(0, 1 - (now - lastMovedAt) / 1400);
    const targetOpacity = (0.18 + heat * heat * (0.6 + Math.min(speed / 1.2, 1) * 0.22))
      * (inside ? 1 : Math.max(0, 1 - (now - departedAt) / 400));
    // Preserve the current brightness when motion resumes, instead of jumping to heat=1.
    const fadeTime = targetOpacity > intensity ? 220 : 120;
    intensity += (targetOpacity - intensity) * (1 - Math.exp(-elapsed / fadeTime));
    const fading = Math.abs(targetOpacity - intensity) > 0.001;
    if (!fading) intensity = targetOpacity;
    const tipOpacity = intensity;
    light.style.setProperty('--hex-tip-opacity', tipOpacity.toFixed(3));
    if (hotCell) {
      // Orange tracks the actual cursor; only the cool trail lags behind.
      hotCell.style.transform = `translate(${targetX.toFixed(2)}px, ${targetY.toFixed(2)}px)`;
      hotCell.style.setProperty('--hex-mask-x', `${(140 - targetX % 84).toFixed(3)}px`);
      hotCell.style.setProperty('--hex-mask-y', `${(140 - targetY % 48.4974226).toFixed(3)}px`);
      hotCell.style.opacity = tipOpacity.toFixed(3);
    }

    const distance = Math.hypot(x - lastSampleX, y - lastSampleY);
    if (inside && heat > 0 && (!lastSampleAt || distance > 28 || (distance > 6 && now - lastSampleAt > 65))) sample(now);
    let glowing = false;
    for (const point of points) {
      const remaining = Math.max(0, 1 - (now - point.born) / lifetime);
      const arrival = Math.min(1, Math.max(0, (now - point.born) / 140));
      const fadeIn = arrival * arrival * (3 - 2 * arrival);
      point.node.style.opacity = (fadeIn * remaining * remaining * 0.85 * point.strength).toFixed(3);
      if (remaining > 0) glowing = true;
    }
    let rippling = false;
    for (const wave of waves) {
      const progress = Math.min(1, Math.max(0, (now - wave.born) / waveLifetime));
      if (progress < 1) {
        const radius = 8 + 252 * (1 - (1 - progress) ** 1.5);
        wave.node.style.setProperty('--hex-wave-radius', `${radius.toFixed(2)}px`);
        const arrival = Math.min(1, progress / 0.08);
        wave.node.style.opacity = (arrival * (1 - progress) ** 1.2).toFixed(3);
        rippling = true;
      } else wave.node.style.opacity = '0';
    }
    if (!inside && !glowing && !rippling && tipOpacity === 0) { reset(); return; }
    // A resting minimum is static: do not keep requesting frames just to display it.
    if (!settled || glowing || rippling || heat > 0 || fading || !inside) requestTick();
    else previousTime = 0;
  };
  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || document.hidden) return;
    inside = true;
    if (!driven || event.clientX !== targetX || event.clientY !== targetY) lastMovedAt = performance.now();
    targetX = event.clientX; targetY = event.clientY;
    requestTick();
  };
  const onLeave = () => {
    if (!driven) return;
    inside = false;
    departedAt = performance.now();
    requestTick();
  };
  const onClick = (event: MouseEvent) => {
    if (event.button !== 0 || event.detail === 0 || document.hidden) return;
    const now = performance.now();
    // Never recycle an active wave: rapid clicks must not truncate its expansion.
    const wave = waves.find(candidate => now - candidate.born >= waveLifetime);
    if (!wave) return;
    wave.born = now;
    wave.node.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    wave.node.style.setProperty('--hex-wave-mask-x', `${300 - event.clientX % 84}px`);
    wave.node.style.setProperty('--hex-wave-mask-y', `${300 - event.clientY % 48.4974226}px`);
    wave.node.style.opacity = '0';
    if (!driven) {
      inside = true;
      targetX = event.clientX; targetY = event.clientY;
      lastMovedAt = wave.born;
    }
    requestTick();
  };
  const configure = () => {
    tracking?.abort();
    reset();
    if (reducedMotion.matches || !finePointer.matches) return;
    if (!points.length) {
      for (let i = 0; i < 4; i++) {
        const node = document.createElement('div');
        node.className = 'hex-click-wave';
        node.setAttribute('aria-hidden', 'true');
        grid.append(node);
        waves.push({ node, born: -Infinity });
      }
      hotCell = document.createElement('div');
      hotCell.className = 'hex-hot-cell';
      hotCell.setAttribute('aria-hidden', 'true');
      grid.append(hotCell);
      for (let i = 0; i < 8; i++) {
        const node = document.createElement('div');
        node.className = 'hex-trail-light';
        // Outside the viewport lattice mask: the small layer can bloom beyond its lines.
        grid.append(node);
        points.push({ node, born: -Infinity, strength: 0 });
      }
    }
    tracking = new AbortController();
    const { signal } = tracking;
    window.addEventListener('pointermove', onMove, { passive: true, signal });
    window.addEventListener('click', onClick, { passive: true, signal });
    window.addEventListener('blur', reset, { signal });
    document.documentElement.addEventListener('pointerleave', onLeave, { signal });
  };
  const onVisibility = () => {
    if (document.hidden) reset();
    grid.toggleAttribute('data-suspended', document.hidden);
  };
  reducedMotion.addEventListener('change', configure);
  finePointer.addEventListener('change', configure);
  document.addEventListener('visibilitychange', onVisibility);
  configure();
  onVisibility();
  return () => {
    tracking?.abort();
    reducedMotion.removeEventListener('change', configure);
    finePointer.removeEventListener('change', configure);
    document.removeEventListener('visibilitychange', onVisibility);
    reset();
    for (const point of points) point.node.remove();
    for (const wave of waves) wave.node.remove();
    hotCell?.remove();
    grid.removeAttribute('data-suspended');
  };
}
