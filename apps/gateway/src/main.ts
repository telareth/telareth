import '@dotenvx/dotenvx/config';

import { Gateway } from '@telareth/gateway';

const gateway = new Gateway({
  server: {
    name: 'gateway',
    port: 4000,
  },
});

try {
  await gateway.start();
} catch (error) {
  console.error(error);
  process.exit(1);
}
