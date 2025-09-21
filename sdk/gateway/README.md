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
  const gateway = new Gateway({
    GATEWAY_PORT = process.env.GATEWAY_PORT, // Optional, default to 4000
  });
  await gateway.start();
})();
```

## 📄 License

This repository is licensed under the MIT License.
