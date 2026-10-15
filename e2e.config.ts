import { web } from '@e2e-dev/web';
import type { E2EConfig } from 'e2e';

export default {
  tests: ['tests/e2e/**/*.e2e.ts'],
  workers: 1,
  retries: 0,
  timeout: 60_000,
  assertionTimeout: 15_000,
  trace: 'retain-on-failure',
  video: 'off',
  targets: [{
    name: 'web',
    engine: web({ locale: 'en-US', timezoneId: 'America/Argentina/Buenos_Aires' }),
    app: {
      url: 'http://localhost:4322',
    },
  }],
} satisfies E2EConfig;
