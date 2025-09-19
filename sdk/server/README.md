## @telareth/server

Factory function to spin up Express.js applications already configured.

---

### Installation

```bash
npm i @telareth/server
```

---

### Usage

```typescript
// Import the dotenvx configuration and the App class.
import '@dotenvx/dotenvx/config';
import { App } from '@telareth/server';

const NAME = process.env.NAME;

(async () => {
  try {
    const app = await App.create({
      name: NAME,
      port: process.env.APP_PORT, // Optional, defaults to 4000
    });

    await app.start();
  } catch (err) {
    console.error(`[ERROR] Failed to start ${NAME}:`, err);
    process.exit(1);
  }
})();
```

### Notes on Usage

- The `App.create` method **throws an error** if it fails to parse the provided options. You should wrap this call in a `try...catch` block to handle these errors gracefully.
- The `app.start` method is **asynchronous**. You must use `await` to ensure the server starts before the application proceeds.
- The `App` class is a singleton factory. It's designed to be the single entry point for creating and managing your application.

---

### 📄 License

This repository is licensed under the MIT License.
