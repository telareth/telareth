import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import importPlg from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

import { rulesImportsExports } from './rules/imports-exports.js';
import { rulesJavascript } from './rules/javascript.js';
import { rulesJsdoc } from './rules/jsdoc.js';
import eslintConfigIgnores from './ignores.js';
import eslintConfigPrettier from './prettier.js';

/**
 * ESLint configurations for javascript files.
 */
const eslintConfigJavascript: Linter.Config[] = defineConfig([
  ...eslintConfigIgnores,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      jsdoc,
      import: importPlg,
      'simple-import-sort': simpleImportSort,
    },
    extends: [
      'js/recommended',
      tseslint.configs.recommended,
      jsdoc.configs['flat/contents-typescript-flavor'],
      jsdoc.configs['flat/logical-typescript-flavor'],
      jsdoc.configs['flat/stylistic-typescript-flavor'],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...rulesJavascript,
      ...rulesJsdoc,
      ...rulesImportsExports,
    },
  },
  ...eslintConfigPrettier,
]);

export default eslintConfigJavascript;
