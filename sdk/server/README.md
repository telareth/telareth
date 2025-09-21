## @telareth/server

Factory function to spin up Express.js applications already configured.

---

## Installation

```bash
npm i @telareth/server
```

---

## Usage

```typescript
// Import the dotenvx configuration and the App class.
import '@dotenvx/dotenvx/config';
import { App } from '@telareth/server';

const NAME = process.env.NAME;

(async () => {
  const app = new App({
    name: NAME,
    port: process.env.APP_PORT, // Optional, defaults to 4000
  });

  await app.start();
})();
```

---

## 📄 License

This repository is licensed under the MIT License.
