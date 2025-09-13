import { defineConfig } from 'prisma/config';

import path from 'node:path';

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('db', 'migrations'),
  },
  views: {
    path: path.join('db', 'views'),
  },
  typedSql: {
    path: path.join('db', 'queries'),
  },
});
