import type { Command } from 'commander';

import { setupCredentialsCommand } from './credentials/index.js';

/**
 * Sets up the "database" CLI command with its subcommands.
 * @param program The Commander program instance to attach the command to.
 */
export function setupDatabaseCommand(program: Command) {
  const db = program.command('database').alias('db');

  setupCredentialsCommand(db);
}
