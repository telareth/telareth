import type { Command } from 'commander';
import { setupNameCommand } from './name/index.js';
import { setupDatabaseCommand } from './db/index.js';

export function setupGenerateCommand(program: Command) {
  const g = program.command('generate').alias('g');

  setupNameCommand(g);
  setupDatabaseCommand(g);
}
