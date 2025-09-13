import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

import eslintConfigIgnores from './ignores.js';
import eslintConfigJavascript from './javascript.js';
import eslintConfigJson from './json.js';
import eslintConfigMarkdown from './markdown.js';
import eslintConfigPrettier from './prettier.js';
import eslintConfigTypescript from './typescript.js';

const eslintConfigRecommended: Linter.Config[] = defineConfig([
  ...eslintConfigIgnores,
  ...eslintConfigJavascript,
  ...eslintConfigTypescript,
  ...eslintConfigJson,
  ...eslintConfigMarkdown,
  ...eslintConfigPrettier,
]);

export default eslintConfigRecommended;
