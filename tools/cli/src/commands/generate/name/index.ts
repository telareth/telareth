import { Command } from 'commander';
import type { Config } from 'unique-names-generator';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

import { options as opt } from './options/index.js';
import type { CommandNameOptions } from './types.js';

/**
 * @param program
 */
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
