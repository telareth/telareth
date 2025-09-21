import '@dotenvx/dotenvx/config';

import { Gateway } from '@telareth/gateway';

(async () => {
  const gateway = new Gateway({
    server: {
      name: 'gateway',
      port: 4000,
    },
  });

  await gateway.start();
})();
