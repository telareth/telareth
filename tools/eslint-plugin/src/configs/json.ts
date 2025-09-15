import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import json from '@eslint/json';

import eslintConfigIgnores from './ignores.js';
import eslintConfigPrettier from './prettier.js';

/**
 * ESLint configurations for JSON files.
 */
const eslintConfigJson: Linter.Config[] = defineConfig([
  ...eslintConfigIgnores,
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    files: ['**/*.jsonc', '.vscode/**/*.json', '**/tsconfig*.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...eslintConfigPrettier,
]);

export default eslintConfigJson;
