# Motion Review Checklist

Project policy (Alejandro, 2026-10-16): criteria for final verification by the orchestrator after all OpenSpec tasks, before archive/merge; not checks required from the executor per batch. Follow AGENTS.md and docs/TESTING_MCP.md. Executor control commands require an explicit batch prompt and run once; on failure report and deliver without retries/substitutes. Audit screenshots belong to the orchestrator; batch audits read diffs without verification. Preserve tests/protections; no routine diagnostic MCP startup or global e2e reactivation without consulting Alejandro. This avoids the repeated-suite and duplicate-MCP/screenshot resource exhaustion observed in GitCron on 2026-10-16.

## Interaction Quality

- The motion explains a state change, not just decoration
- Direction and distance match spatial context
- Enter and exit timing feels intentional and asymmetrical
- Staggering is used only when it improves hierarchy

## Performance

- Primary animated properties are `transform` and/or `opacity`
- No avoidable layout-thrashing animations in frequent interactions
- Layer promotion is controlled and not over-applied
- Interaction remains responsive under realistic load

## Accessibility

- `prefers-reduced-motion: reduce` is implemented
- Reduced-motion behavior keeps state changes understandable
- Focus management remains correct through transitions
- Keyboard and assistive tech flows are not blocked by animation

## View Transitions

- Feature detection and graceful fallback are present
- Shared element naming is scoped and meaningful
- Pseudo-element styles are explicit for root and shared groups
- Cross-document behavior is verified on supported browsers

## Validation

- Tested on desktop and mobile viewport sizes
- Tested in at least one lower-power or throttled scenario
- No visual tearing, clipping, or timing drift in rapid interactions
