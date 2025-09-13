import type { ESLint } from 'eslint';

import pkg from '../package.json' with { type: 'json' };

import type { TelarethESLintPluginConfigs } from './configs/index.js';
import { configs } from './configs/index.js';

type TelarethEslintPlugin = ESLint.Plugin & {
  configs: TelarethESLintPluginConfigs;
};

const plugin: TelarethEslintPlugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: 'telareth',
  },
  configs,
};

export default plugin;
