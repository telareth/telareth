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
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};
