/** Enhance the existing CSS light; no React state, canvas, or per-cell DOM. */
export function setupEnergyGridPointer(): () => void {
  const grid = document.querySelector<HTMLElement>('[data-energy-grid]');
  const light = grid?.querySelector<HTMLElement>('.eg-spot--primary');
  if (!grid || !light) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let tracking: AbortController | undefined;
  let frame = 0;
  let previousTime = 0;
  let driven = false;
  let x = 0, y = 0, targetX = 0, targetY = 0;

  const stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  };
  const reset = () => {
    stop();
    driven = false;
    light.removeAttribute('data-pointer-driven');
    light.style.removeProperty('--eg-pointer-x');
    light.style.removeProperty('--eg-pointer-y');
  };
  const writePosition = () => {
    light.style.setProperty('--eg-pointer-x', `${x.toFixed(2)}px`);
    light.style.setProperty('--eg-pointer-y', `${y.toFixed(2)}px`);
  };
  const follow = (now: number) => {
    frame = 0;
    if (document.hidden || reducedMotion.matches || !finePointer.matches) return;
    if (!driven) {
      // Read once at handoff, before writes. Keep the ambient light's current
      // position so the first pointer event does not make it jump.
      const transform = getComputedStyle(light, '::before').transform;
      const position = new DOMMatrixReadOnly(transform === 'none' ? undefined : transform);
      x = position.e;
      y = position.f;
      writePosition();
      light.setAttribute('data-pointer-driven', '');
      driven = true;
    }
    const elapsed = previousTime ? Math.min(now - previousTime, 50) : 1000 / 60;
    previousTime = now;
    // Time-based easing stays consistent on 60/120 Hz displays.
    const amount = 1 - Math.exp(-elapsed / 85);
    x += (targetX - x) * amount;
    y += (targetY - y) * amount;
    const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < 0.25;
    if (settled) { x = targetX; y = targetY; }
    writePosition();
    if (!settled) frame = requestAnimationFrame(follow);
    else previousTime = 0;
  };
  const onMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || document.hidden) return;
    targetX = event.clientX;
    targetY = event.clientY;
    // Pointer events only replace the target; multiple events share one frame.
    if (!frame) frame = requestAnimationFrame(follow);
  };
  const configure = () => {
    tracking?.abort();
    reset();
    if (reducedMotion.matches || !finePointer.matches) return;
    tracking = new AbortController();
    const {signal} = tracking;
    window.addEventListener('pointermove', onMove, {passive: true, signal});
    window.addEventListener('blur', stop, {signal});
    document.documentElement.addEventListener('pointerleave', stop, {signal});
  };
  const onVisibility = () => {
    // Pause the two autonomous CSS lights too while the tab is hidden.
    grid.toggleAttribute('data-suspended', document.hidden);
    if (document.hidden) stop();
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
    grid.removeAttribute('data-suspended');
  };
}
