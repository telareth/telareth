import { Command, Option } from 'commander';
import {
  uniqueNamesGenerator,
  type Config,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

export interface CommandGenNameOptions {
  times: string;
  separator: string;
  newLine?: boolean;
}

const optTimes = new Option(
  '-t, --times [number]',
  'number of names to generate'
).default(1);

const optSeparator = new Option(
  '-s, --separator [string]',
  'the character that separates the generated words'
).default(' ');

const optNewLine = new Option(
  '--new-line',
  'prints words on their own line'
).conflicts('separator');

export function setupNameCommand(program: Command) {
  program
    .command('name')
    .description('Generate random name(s) using unique-names-generator')
    .addOption(optTimes)
    .addOption(optSeparator)
    .addOption(optNewLine)
    .action((options: CommandGenNameOptions) => {
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
