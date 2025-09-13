import type { Linter } from 'eslint';

/**
 * ESLint rules configuration for JavaScript.
 *
 * - Warns about unused variables (`no-unused-vars`), but ignores:
 * - Variables starting with `_`
 * - Function arguments starting with `_`.
 * @type {Linter.RulesRecord}
 */
export const rulesJavascript: Linter.RulesRecord = {
  'no-unused-vars': [
    'warn',
    {
      vars: 'all',
      args: 'after-used',
      varsIgnorePattern: '^_', // ignore variables starting with _
      argsIgnorePattern: '^_', // ignore function args starting with _
    },
  ],
};
