import fs from 'fs';
import path from 'path';

import type { Command } from 'commander';
import { Option } from 'commander';
import generatePassword from 'password-generator';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

import { promptUser } from '../../../../utils/prompt-user.js';

export interface CommandCredentials {
  path: string;
}

type DbKey =
  | 'DATABASE_USER'
  | 'DATABASE_PASS'
  | 'DATABASE_NAME'
  | 'DATABASE_HOST'
  | 'DATABASE_PORT'
  | 'DATABASE_URL';

const ORDER: DbKey[] = [
  'DATABASE_USER',
  'DATABASE_PASS',
  'DATABASE_NAME',
  'DATABASE_HOST',
  'DATABASE_PORT',
  'DATABASE_URL',
];

const optPath = new Option(
  '-p, --path <file>',
  'The path to the .env file where to write the credentials (defaults to ./.env)'
).default('.env');

/**
 * Sets up the "credentials" command for the program.
 * @param program The Commander program instance.
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

      const envFile = path.isAbsolute(options.path)
        ? options.path
        : path.join(process.cwd(), options.path);

      let envLines: string[] = [];

      try {
        // Ensure .env file exists
        if (!fs.existsSync(envFile)) {
          console.log(`.env file not found. Creating a new one at ${envFile}`);
          fs.writeFileSync(envFile, '');
        }

        const fileContent = fs.readFileSync(envFile, 'utf-8');
        envLines = fileContent.split('\n').filter(Boolean);

        // Build envMap
        const envMap: Partial<Record<DbKey, string>> = {};
        for (const line of envLines) {
          const [key, ...rest] = line.split('=');
          if (key && ORDER.includes(key as DbKey)) {
            envMap[key as DbKey] = rest.join('=').replace(/^"|"$/g, '');
          }
        }

        // Fill missing defaults
        envMap.DATABASE_USER ??= username;
        envMap.DATABASE_PASS ??= password;
        envMap.DATABASE_NAME ??= 'telareth';
        envMap.DATABASE_HOST ??= 'localhost';
        envMap.DATABASE_PORT ??= '5432';
        envMap.DATABASE_URL ??= `postgresql://${envMap.DATABASE_USER}:${envMap.DATABASE_PASS}@${envMap.DATABASE_HOST}:${envMap.DATABASE_PORT}/${envMap.DATABASE_NAME}`;

        // Ask before overwriting existing USER
        if (envMap.DATABASE_USER !== username) {
          const overwrite = await promptUser(
            `DATABASE_USER is already set (${envMap.DATABASE_USER}). Overwrite? (y/n): `
          );
          if (overwrite) {
            envMap.DATABASE_USER = username;
          }
        }

        // Ask before overwriting existing PASS
        if (envMap.DATABASE_PASS !== password) {
          const overwrite = await promptUser(
            `DATABASE_PASS is already set (${envMap.DATABASE_PASS}). Overwrite? (y/n): `
          );
          if (overwrite) {
            envMap.DATABASE_PASS = password;
          }
        }

        // Sort lines in fixed ORDER
        const newLines = ORDER.map((key) => {
          const value = envMap[key];
          return value !== undefined ? `${key}="${value}"` : undefined;
        }).filter((line): line is string => Boolean(line));

        fs.writeFileSync(envFile, newLines.join('\n') + '\n');
        console.log(`Credentials have been written to ${envFile}`);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
}
