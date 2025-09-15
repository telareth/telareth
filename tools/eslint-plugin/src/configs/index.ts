import type { Linter } from 'eslint';

import eslintConfigIgnores from './ignores.js';
import eslintConfigJavascript from './javascript.js';
import eslintConfigJson from './json.js';
import eslintConfigMarkdown from './markdown.js';
import eslintConfigPrettier from './prettier.js';
import eslintConfigRecommended from './recommended.js';
import eslintConfigTypescript from './typescript.js';

type ConfigKey =
  | 'ignores'
  | 'javascript'
  | 'typescript'
  | 'json'
  | 'markdown'
  | 'prettier'
  | 'recommended';

export type TelarethESLintPluginConfigs = {
  [K in ConfigKey]: Linter.Config[]; // literal keys
} & {
  [key: string]: Linter.Config | Linter.Config[]; // index signature
};

/**
 * Telareth ESLint configurations.
 */
export const configs: TelarethESLintPluginConfigs = {
  // Standalone configs
  ignores: eslintConfigIgnores,
  javascript: eslintConfigJavascript,
  typescript: eslintConfigTypescript,
  json: eslintConfigJson,
  markdown: eslintConfigMarkdown,
  prettier: eslintConfigPrettier,

  // Collections
  recommended: eslintConfigRecommended,
};
