import type { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * ESLint configurations for globally ignored files and directories.
 */
const eslintConfigIgnores: Linter.Config[] = defineConfig([
  globalIgnores(['node_modules/', '**/node_modules/'], 'Ignore dependencies'),
  globalIgnores(['.nx/'], 'Ignore nx data'),
  globalIgnores(
    [
      'dist/',
      '**/dist/',
      'build/',
      '**/build/',
      'tmp/',
      '**/tmp/',
      'out-tsc/',
      '**/out-tsc/**',
    ],
    'Ignore compiled output'
  ),
  globalIgnores(
    ['.github/instructions/', '.cursor/rules/'],
    'Ignore instructions for AI agents'
  ),
  globalIgnores(
    ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
    'Ignore timestamps'
  ),
  globalIgnores(['*.log', '**/*.log'], 'Ignore logs'),
  globalIgnores(
    [
      'package-lock.json',
      '**/package-lock.json',
      'pnpm-lock.yaml',
      '**/pnpm-lock.yaml',
      'yarn.lock',
      '**/yarn.lock',
      'bun.lock',
      'bun.lockb',
      '**/bun.lock',
      '**/bun.lockb',
    ],
    'Ignore lock files'
  ),
]);

export default eslintConfigIgnores;
