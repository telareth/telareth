import type { Command } from 'commander';
import { setupNameCommand } from './generate/name.js';

export function setupGenerateCommand(program: Command) {
  const g = program.command('generate').alias('g');

  setupNameCommand(g);
}
