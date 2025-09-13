import { Gateway } from './gateway/gateway.js';

(async () => {
  const gateway = new Gateway();
  await gateway.start();
})();
