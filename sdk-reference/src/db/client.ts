import { PrismaClient } from './types/client.js';

let prisma: PrismaClient | null = null;

/**
 * Returns a singleton PrismaClient instance.
 */
export function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
}

/**
 * Disconnects the Prisma client if it has been initialized.
 */
export async function disconnectDB(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
    console.log('[INFO] DB disconnected');
  }
}
