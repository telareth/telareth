import { Command } from 'commander';
import {
  uniqueNamesGenerator,
  type Config,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

import { type CommandNameOptions } from './types.js';
import { options as opt } from './options/index.js';

export function setupNameCommand(program: Command) {
  program
    .command('name')
    .description('Generate random name(s) using unique-names-generator')
    .addOption(opt.times)
    .addOption(opt.separator)
    .addOption(opt.newLine)
    .action((options: CommandNameOptions) => {
      const times =
        typeof options.times === 'string'
          ? parseInt(options.times, 10)
          : options.times;

      const config: Config = {
        dictionaries: [adjectives, colors, animals],
        length: times,
        separator: options.newLine !== undefined ? '\n' : options.separator,
      };

      const names = uniqueNamesGenerator(config);

      console.log(names);
    });
}
