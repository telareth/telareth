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

const app = new App({
  name: process.env.NAME,
  port: process.env.PORT, // Optional, defaults to 4000
});

try {
  await app.start();
} catch (err) {
  console.error(err);
  process.exit(1);
}
```

---

## 📄 License

This repository is licensed under the MIT License.
