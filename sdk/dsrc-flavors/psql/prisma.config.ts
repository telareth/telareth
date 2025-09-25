import path from 'node:path';

import type { PrismaConfig } from 'prisma';

const config: PrismaConfig = {
  schema: path.join('prisma', 'schema.prisma'),
  migrations: {
    path: path.join('migrations'),
  },
};

export default config;
