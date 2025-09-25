import path from 'node:path';

import type { PrismaConfig } from 'prisma';

export default {
  schema: path.join('schema', 'schema.prisma'),
  migrations: {
    path: path.join('migrations'),
  },
} satisfies PrismaConfig;
