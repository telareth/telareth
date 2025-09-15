import type { Linter } from 'eslint';

/**
 * JavaScript import sorting and type import rules.
 *
 * Dependencies required:
 * - eslint-plugin-import
 * - eslint-plugin-simple-import-sort.
 *
 * Import order enforced:
 * 1. Dotenv imports
 * 2. Node.js built-ins
 * 3. Side-effect imports
 * 4. Bare third-party packages
 * 5. React and related packages
 * 6. UI libraries (MUI, Tabler)
 * 7. Internal packages (@telareth)
 * 8. Parent imports
 * 9. Relative imports
 * 10. Media & style imports.
 */
export const rulesImportsExports: Linter.RulesRecord = {
  'sort-imports': 'off',

  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // 1. Dotenv imports first
        ['^dotenv', '^@dotenvx/dotenvx'],

        // 2. Node.js built-ins
        [
          '^assert',
          '^buffer',
          '^child_process',
          '^cluster',
          '^console',
          '^constants',
          '^crypto',
          '^dgram',
          '^dns',
          '^domain',
          '^events',
          '^fs',
          '^http',
          '^https',
          '^inspector',
          '^module',
          '^net',
          '^os',
          '^path',
          '^perf_hooks',
          '^process',
          '^punycode',
          '^querystring',
          '^readline',
          '^repl',
          '^stream',
          '^string_decoder',
          '^timers',
          '^tls',
          '^tty',
          '^url',
          '^util',
          '^v8',
          '^vm',
          '^zlib',
          '^node:',
        ],

        // 3. Side-effect imports (polyfills, CSS resets, etc.)
        ['^\\u0000'],

        // 4. Non-scoped and scoped third-party packages (chalk, lodash, express, @scope/...)
        ['^[^@./]', '^@\\w'],

        // 5. React ecosystem
        ['^react$', '^react-dom$', '^react'],

        // 6. UI libraries
        ['^@mui', '^@material-ui', '^@tabler'],

        // 7-9. Internal org packages + relative imports (parent + sibling)
        ['^(@telareth)(/.*|$)', '^\\.\\.?/.+'],

        // 10. Styles and media assets last
        [
          '^.+\\.s?css$',
          '^.+\\.(png|jpe?g|gif|webp|svg)$',
          '^.+\\.(mp3|wav|ogg)$',
          '^.+\\.(mp4|avi|mov)$',
        ],
      ],
    },
  ],

  // Sort export statements
  'simple-import-sort/exports': 'error',

  // Prefer top-level type imports
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
};
