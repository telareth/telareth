import type { Linter } from 'eslint';

/**
 * JavaScript import sorting and type import rules.
 *
 * Dependencies required to make these rules work:
 * - eslint-plugin-import
 * - eslint-plugin-simple-import-sort.
 *
 * Rules enforced:
 * 1. Dotenv imports first
 * 2. Side-effect imports
 * 3. Bare package imports
 * 4. Node.js built-ins
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
        ['^dotenv', '^@dotenvx/dotenvx'],
        ['^\\u0000'],
        ['^[^@./]'],
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
        ['^react', '^react-dom', '^@?\\w'],
        ['^@mui', '^@material-ui', '^@tabler'],
        ['^(@telareth)(/.*|$)'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        [
          '^.+\\.s?css$',
          '^.+\\.(png|jpe?g|gif|webp|svg)$',
          '^.+\\.(mp3|wav|ogg)$',
          '^.+\\.(mp4|avi|mov)$',
        ],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',

  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
};
