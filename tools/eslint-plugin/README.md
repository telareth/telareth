# Telareth ESLint Plugin

This package provides a set of **flat ESLint configurations** and rules for consistent linting across JavaScript, TypeScript, JSON, Markdown, and more.  
It is designed for use in Telareth projects, but can be adopted in any workspace.

---

## ✨ Features

- **Base JavaScript/TypeScript rules** with sensible defaults
- **Import sorting** powered by [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort)
- **JSDoc linting** with [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
- **JSON, JSONC, JSON5 linting** with [`@eslint/json`](https://eslint.org/docs/latest/use/configure/json)
- **Markdown linting** with [`@eslint/markdown`](https://eslint.org/docs/latest/use/configure/markdown)
- **Prettier integration** with [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- **Global ignores** for common folders (`node_modules`, `dist`, `build`, etc.)
- **Recommended config** to combine everything into a single preset

---

## 📦 Installation

Install the required dependencies:

```bash
npm install -D @telareth/eslint-plugin
# or
yarn add -D @telareth/eslint-plugin
# or
pnpm add -D @telareth/eslint-plugin
# or
bun add -D @telareth/eslint-plugin
```

---

## 🔧 Configurations

This plugin exposes multiple configs you can extend in your `eslint.config.js`:

- **`recommended`** → Full setup (ignores, JavaScript, TypeScript, JSON, Markdown, Prettier)
- **`ignores`** → Standard project ignores (`dist/`, `build/`, lock files, etc.)
- **`javascript`** → Linting rules for `.js`, `.mjs`, `.cjs`
- **`typescript`** → Linting rules for `.ts`, `.mts`, `.cts`
- **`json`** → Support for `.json`, `.jsonc`, `.json5`
- **`markdown`** → Linting inside Markdown and code blocks
- **`prettier`** → Enforce Prettier formatting rules
- **`base/js`** → Base rules (JS + TS + JSDoc + import sorting)

---

## 📋 Example Usage

In your project root, create an `eslint.config.js`:

```js
import telareth from '@telareth/eslint-plugin';

export default [...telareth.configs.recommended];
```

You can also mix and match:

```js
import telareth from '@telareth/eslint-plugin';

export default [
  ...telareth.configs.ignores,
  ...telareth.configs.javascript,
  ...telareth.configs.typescript,
  ...telareth.configs.prettier,
];
```

---

## 📚 Rules

Custom rule highlights:

- **Imports**
  - `simple-import-sort/imports` → enforce group sorting (see above)
  - `simple-import-sort/exports` → enforce export sorting

- **JSDoc**
  - `jsdoc/require-description` → require descriptions on JSDoc blocks

- **Formatting**
  - Prettier handled via `eslint-plugin-prettier`

---

## 🚀 Usage

Run ESLint:

```bash
npx eslint .
```

Auto-fix:

```bash
npx eslint --fix .
```

---

## 📚 Resources

- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Prettier integration with ESLint](https://github.com/prettier/eslint-plugin-prettier)
- [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [JSDoc ESLint Plugin](https://github.com/gajus/eslint-plugin-jsdoc)

---

This config ensures **consistent, readable, and maintainable code** across all Telareth projects.

## Licese

@telareth/eslint-plugin is licensed under the MIT License.
