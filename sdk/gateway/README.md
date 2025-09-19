# @telareth/gateway

Telareth's Gateway SDK

## Installation

```bash
npm i @telareth/gateway
```

## Usage

```ts
// Requiored for correctly load and parse .env
import '@dotenvx/dotenvx/config';
import { Gateway } from '@telareth/gateway';

(async () => {
  try {
    const gateway = await Gateway.create({
      GATEWAY_PORT = process.env.GATEWAY_PORT, // Optional, default to 4000
    });

    if (gateway) {
      await gateway.start();
    }
  } catch (err) {
    console.error('[ERROR] Failed to start gateway, continuing anyway:', err);
  }
})();
```

## 📄 License

This repository is licensed under the MIT License.
