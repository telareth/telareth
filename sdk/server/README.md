# @telareth/server

Fctory function to spin up Express.js applications already configured

## Installation

```bash
npm i @telareth/server
```

## Usage

```ts
// Requiored for correctly load and parse .env
import '@dotenvx/dotenvx/config';
import { App } from '@telareth/app';

const NAME = process.env.NAME;

(async () => {
  try {
    const app = await App.create({
      name: NAME,
      port: process.env.APP_PORT, // Optional, default to 4000
    });

    if (app) {
      await app.start();
    }
  } catch (err) {
    console.error(`[ERROR] Failed to start ${NAME}$':`, err);
  }
})();
```

## 📄 License

This repository is licensed under the MIT License.
