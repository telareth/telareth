import type { Command } from 'commander';

import { setupDatabaseCommand } from './db/index.js';
import { setupNameCommand } from './name/index.js';

/**
 * @param program
 */
export function setupGenerateCommand(program: Command) {
  const g = program.command('generate').alias('g');

  setupNameCommand(g);
  setupDatabaseCommand(g);
}
