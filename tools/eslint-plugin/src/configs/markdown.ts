import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import markdown from '@eslint/markdown';

import eslintConfigIgnores from './ignores.js';
import eslintConfigPrettier from './prettier.js';
import { rulesImportsExports } from './rules/imports-exports.js';

/**
 * ESLint configurations for markdown files.
 */
const eslintConfigMarkdown: Linter.Config[] = defineConfig([
  ...eslintConfigIgnores,
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.md/*.js', '**/*.md/*.ts', '**/*.md/*.jsx', '**/*.md/*.tsx'],
    rules: {
      ...rulesImportsExports,
    },
  },
  ...eslintConfigPrettier,
]);

export default eslintConfigMarkdown;
