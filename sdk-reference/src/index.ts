import 'dotenv/config';

import { Gateway } from './gateway/gateway.js';

(async () => {
  try {
    const gateway = await Gateway.create();

    if (gateway) {
      await gateway.start();
    }
  } catch (err) {
    console.error('[ERROR] Failed to start gateway, continuing anyway:', err);
  }
})();
