import type { Command } from 'commander';
import { setupCredentialsCommand } from './credentials/index.js';

export function setupDatabaseCommand(program: Command) {
  const db = program.command('database').alias('db');

  setupCredentialsCommand(db);
}
