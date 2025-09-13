# @telarteth/prettier-config

This configuration ensures consistent formatting across JavaScript, TypeScript, Markdown, YAML, TOML, Prisma, and shell scripts.

---

## ✨ Features

- **Plugins**
  - [`prettier-plugin-sh`](https://github.com/un-ts/prettier/tree/master/packages/prettier-plugin-sh) → Format shell scripts (`.sh`).
  - [`prettier-plugin-toml`](https://github.com/bd82/toml-tools/tree/master/packages/prettier-plugin-toml) → Format `.toml` files.
  - [`prettier-plugin-prisma`](https://github.com/omar-dulaimi/prettier-plugin-prisma) → Format Prisma schema files.

- **Base Style Rules**
  - Trailing commas: `es5`
  - Tab width: `2`
  - Semicolons: `true`
  - Single quotes: `true`
  - Line width: `80`
  - End of line: `lf`

- **File-specific Overrides**
  - **Markdown (`.md`, `.mdx`)** → Ensures Prettier uses the `markdown` parser.
  - **YAML (`.yaml`, `.yml`)** → Keeps `printWidth` at 80 characters.
  - **TOML (`.toml`)** → Uses a wider `printWidth` of 100 characters.

---

## ⏬ Install

```bash
npm install -D prettier @telareth/prettier/config
# OR
yarn add -D prettier @telareth/prettier/config
# OR
pnpm add -D prettier @telareth/prettier/config
# OR
bun add -D prettier @telareth/prettier/config
```

## 🚀 Usage

Import this configuration in a `.prettierrc.js` file and export the modifications, e.g:

```js
// .prettierrc.js
import telarethConfig from '@telareth/prettier-config';

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...usernamePrettierConfig,
  semi: false,
};

export default config;
```

### Editor integration

Most editors (VSCode, JetBrains, etc.) detect Prettier automatically if the plugin is installed.
For VSCode, make sure you have the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed, and enable **Format on Save**:

```jsonc
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

---

## 📚 Resources

- [Prettier Documentation](https://prettier.io/docs/en/configuration.html)
- [Prettier Options](https://prettier.io/docs/en/options.html)

---

## License

The `@telareth/prettier-config` is licensed under the MIT License.
