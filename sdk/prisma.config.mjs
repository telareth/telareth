import { defineConfig } from 'prisma/config';

import path from 'node:path';

export default defineConfig({
  schema: path.join('src', 'db', 'schema.prisma'),
  migrations: {
    path: path.join('src', 'db', 'migrations'),
  },
  views: {
    path: path.join('src', 'db', 'views'),
  },
  typedSql: {
    path: path.join('src', 'db', 'typed-sql'),
  },
});
