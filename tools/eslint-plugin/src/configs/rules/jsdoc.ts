import type { Linter } from 'eslint';

/**
 * JSDoc rules for documenting functions, classes, and modules.
 *
 * Dependencies required:
 * - eslint-plugin-jsdoc.
 *
 * Features:
 * - Require JSDoc for functions and classes
 * - Enforce type annotations in JSDoc
 * - Require param and return descriptions
 * - Enforce consistent style.
 */
export const rulesJsdoc: Linter.RulesRecord = {
  'jsdoc/check-alignment': 'error', // Align JSDoc block asterisks
  'jsdoc/check-examples': 'off', // Optional: validate examples
  'jsdoc/check-indentation': 'error', // Correct indentation in JSDoc
  'jsdoc/check-param-names': 'error', // Params must match function signature
  'jsdoc/check-property-names': 'error', // Object property names must match
  'jsdoc/check-tag-names': 'error', // Valid tags only
  'jsdoc/check-types': 'error', // Types in @param/@returns must be valid
  'jsdoc/empty-tags': 'warn', // Warn for empty tags
  'jsdoc/implements-on-classes': 'error', // Enforce @implements on classes
  'jsdoc/match-description': 'off', // Optional: require patterns in descriptions
  'jsdoc/no-bad-blocks': 'error', // Prevent malformed JSDoc blocks
  'jsdoc/no-blank-blocks': 'warn', // Warn on empty blocks
  'jsdoc/no-defaults': 'warn', // Warn when default values are repeated
  'jsdoc/no-undefined-types': 'error', // Prevent undefined types
  'jsdoc/require-description': 'error', // All JSDoc entries require descriptions
  'jsdoc/require-description-complete-sentence': 'warn', // Enforce full sentences
  'jsdoc/require-jsdoc': [
    'error',
    {
      contexts: [
        'FunctionDeclaration',
        'MethodDefinition',
        'ClassDeclaration',
        'ArrowFunctionExpression',
      ],
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    },
  ],
  'jsdoc/require-param': 'error', // Require @param for all function parameters
  'jsdoc/require-param-description': 'error', // Params must have description
  'jsdoc/require-param-type': 'error', // Params must have type
  'jsdoc/require-returns': 'error', // Require @returns for functions
  'jsdoc/require-returns-check': 'error', // Ensure @returns matches code
  'jsdoc/require-returns-description': 'error', // Returns must have description
  'jsdoc/require-returns-type': 'error', // Returns must have type
  'jsdoc/valid-types': 'error', // Ensure all types are valid
};
