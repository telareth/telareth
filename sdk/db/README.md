# @telareth/db

`@telareth/db` is the official Telareth database SDK, providing a type-safe interface to manage services, API keys, middlewares, and admin accounts. It also offers Redis integration, initialization helpers, and Express middlewares for API key validation and DB injection.

---

## Installation

```bash
npm install @telareth/db
# or
yarn add @telereth/db
# or
pnpm add @telareth/db
# or bun
bun install @telareth/db
```

---

## Required Environment Variables

```.env
REDIS_URL="redis://localhost:6379"
SECRET_KEY='sepersecret'
JWT_SECRET="$SECRET_KEY"
JWT_EXPIRES_IN="1h"
```

---

## Initialization

Before using the SDK, initialize the database and Redis connections:

```ts
import { initDB } from '@telareth/db';

await initDB();
```

This ensures the database is ready and Redis is connected.

---

## Working with Services

Services represent applications or APIs registered in your system.

```ts
import { queries } from '@telareth/db';

// Create a new service
const newService = await queries.service.createService({
  name: 'My Service',
  url: 'https://service.example.com',
});

// List all services
const services = await queries.service.listServices();

// Get a specific service by ID
const service = await queries.service.getServiceById(newService.id);
```

---

## Managing Middlewares

Middlewares can be dynamically registered and applied to services.

```ts
import { queries, middlewares } from '@telareth/db';

// Create a middleware
const middleware = await queries.middleware.createMiddleware({
  name: 'Auth Middleware',
  type: 'pre-request',
  config: { requiredRole: 'admin' },
});

// Update a middleware
await queries.middleware.updateMiddleware(middleware.id, {
  config: { requiredRole: 'superadmin' },
});

// Delete a middleware
await queries.middleware.deleteMiddleware(middleware.id);

// Use middleware in Express
import express from 'express';
const app = express();

app.use(middlewares.injectDB); // Inject DB instance
app.use(middlewares.validateApiKey); // Protect routes with API key validation
```

---

## API Key Management

API keys authenticate clients when calling your services.

```ts
import { queries } from '@telareth/db';

// Create a new API key
const apiKey = await queries.apiKeys.createApiKey({
  name: 'Service Key',
  serviceId: 'service-id',
});

// Fetch an API key
const key = await queries.apiKeys.getApiKey(apiKey.id);

// Increment usage count
await queries.apiKeys.incrementUsage(apiKey.id);

// Revoke an API key
await queries.apiKeys.revokeApiKey(apiKey.id);
```

---

## Redis Integration

The SDK provides helpers for connecting and using Redis:

```ts
import { connectRedis, redis } from '@telareth/db';

// Connect to Redis
await connectRedis();

// Set a value
await redis.set('my-key', 'value');

// Get a value
const value = await redis.get('my-key');
```

---

## Admin Management

Manage administrative users:

```ts
import { queries } from '@telareth/db';

// Create a new admin
const admin = await queries.admin.createAdmin({
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secure-password',
});

// Fetch admin by ID
const fetchedAdmin = await queries.admin.getAdminById(admin.id);
```

---

## Directory Structure

```bash
sdk/db
├── src
│ ├── consts.ts   # Global constants
│ ├── helpers     # DB & Redis helpers
│ ├── middlewares # Express middlewares
│ ├── queries     # Service, middleware, API key, and admin queries
│ ├── schemas     # Validation schemas
│ └── types       # TypeScript type definitions
├── index.ts      # Barrel export for the SDK
├── init.ts       # DB initialization logic
├── tsconfig.json
└── tsconfig.lib.json
```

---

## Contributing

Contributions are welcome! Please follow TypeScript and JSDoc conventions. Add tests for any new features and ensure type safety.

---

## License

MIT License
