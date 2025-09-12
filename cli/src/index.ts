#!/usr/bin/env node
import { Command } from 'commander';

import pkg from '../package.json' with { type: 'json' };
import { setupGenerateCommand } from './commands/generate.js';

const program = new Command();

program.name('telareth').description(pkg.description).version(pkg.version);

setupGenerateCommand(program);

program.parse(process.argv);
