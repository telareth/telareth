import type { Command } from 'commander';

import { setupDatabaseCommand } from './db/index.js';
import { setupNameCommand } from './name/index.js';

/**
 * Sets up the "generate" CLI command with its subcommands.
 * @param program The Commander program instance to attach the command to.
 */
export function setupGenerateCommand(program: Command) {
  const g = program.command('generate').alias('g');

  setupNameCommand(g);
  setupDatabaseCommand(g);
}
