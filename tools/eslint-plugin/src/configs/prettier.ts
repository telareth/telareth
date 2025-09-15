import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

import eslintConfigIgnores from './ignores.js';

/**
 * ESLint Prettier fixes.
 */
const eslintConfigPrettier: Linter.Config[] = defineConfig([
  ...eslintConfigIgnores,
  prettierRecommended,
]);

export default eslintConfigPrettier;
