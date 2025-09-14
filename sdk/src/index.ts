import 'dotenv/config';

import { Gateway } from './gateway/gateway.js';

(async () => {
  const gateway = await Gateway.create();

  if (gateway) {
    await gateway.start();
  }
})();
