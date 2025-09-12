import { Option, type Command } from 'commander';
import generatePassword from 'password-generator';
import path from 'path';
import fs from 'fs';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

import { promptUser } from '../../../../utils/prompt-user.js';

interface CommandCredentials {
  path: string;
}

const optPath = new Option(
  '-p, --path',
  'The path to the .env file where to write the credentials'
).default('.');

/**
 * Sets up the `credentials` command for the program.
 * @param {Command} program The Commander program instance.
 */
export function setupCredentialsCommand(program: Command) {
  program
    .command('credentials')
    .addOption(optPath)
    .action(async (options: CommandCredentials) => {
      const username = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        length: 3,
        separator: '_',
      });

      const password = generatePassword(12, false, /[a-zA-Z0-9_]/);

      const envFile = path.join(options.path, '.env');
      let envLines: string[] = [];

      try {
        // Check if the .env file exists. If not, create it.
        if (!fs.existsSync(envFile)) {
          console.log(`.env file not found. Creating a new one at ${envFile}`);
          fs.writeFileSync(envFile, '');
        }

        // Read the content of the .env file.
        const fileContent = fs.readFileSync(envFile, 'utf-8');
        envLines = fileContent.split('\n');

        // Check for DATABASE_USER variable
        const userLineIndex = envLines.findIndex((line) =>
          line.startsWith('DATABASE_USER=')
        );
        const userVariable = `DATABASE_USER="${username}"`;

        if (userLineIndex === -1) {
          // DATABASE_USER not found, add it to the first line.
          console.log(`DATABASE_USER not found. Adding it to the file.`);
          envLines.splice(0, 0, userVariable);
        } else {
          // DATABASE_USER found, ask to overwrite.
          console.log(
            `DATABASE_USER variable found: ${envLines[userLineIndex]}`
          );
          const overwrite = await promptUser(
            'Do you want to overwrite it with the new value? (y/n): '
          );
          if (overwrite) {
            envLines[userLineIndex] = userVariable;
            console.log('DATABASE_USER has been updated.');
          } else {
            console.log('Keeping the existing DATABASE_USER value.');
          }
        }

        // Check for DATABASE_PASS variable
        const passLineIndex = envLines.findIndex((line) =>
          line.startsWith('DATABASE_PASS=')
        );
        const passVariable = `DATABASE_PASS="${password}"`;

        if (passLineIndex === -1) {
          // DATABASE_PASS not found, add it to the second line.
          console.log(`DATABASE_PASS not found. Adding it to the file.`);
          // Adjust index if DATABASE_USER was just added
          const passInsertIndex =
            envLines.findIndex((line) => line.startsWith('DATABASE_USER=')) + 1;
          envLines.splice(passInsertIndex, 0, passVariable);
        } else {
          // DATABASE_PASS found, ask to overwrite.
          console.log(
            `DATABASE_PASS variable found: ${envLines[passLineIndex]}`
          );
          const overwrite = await promptUser(
            'Do you want to overwrite it with the new value? (y/n): '
          );
          if (overwrite) {
            envLines[passLineIndex] = passVariable;
            console.log('DATABASE_PASS has been updated.');
          } else {
            console.log('Keeping the existing DATABASE_PASS value.');
          }
        }

        // Write the modified content back to the file.
        fs.writeFileSync(envFile, envLines.join('\n'));
        console.log(`Credentials have been written to ${envFile}`);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
}
