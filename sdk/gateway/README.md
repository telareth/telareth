# @telareth/gateway

Telareth's Gateway SDK

## Installation

```bash
npm i @telareth/gateway
```

## Usage

```ts
// Required for correctly loading and parsing .env
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
```

## 📄 License

This repository is licensed under the MIT License.
