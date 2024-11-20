# Quick Start
1. Install node https://nodejs.org/en
2. Install yarn ```npm install -g yarn```
3. Clone the repository ```git clone https://github.com/jackbelyeu/academic_activity```
4. Use `yarn` to install dependencies
5. Use `yarn dev` to start development server
6. In env folder, create a new file named `.env.local`
7. Paste the following code into this new file `VITE_PASSWORD='yourActualPasswordHere'`

# Backend

---
<details open><summary><h2>Getting Started</h2></summary>

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

1. **_(Optional)_** Install the VS Code extensions listed in `.vscode/extensions.json`

1. Use `yarn` to install dependencies
1. Use `yarn dev` to start development server

---
</details>
<details open><summary><h2>Commands</h2></summary>

### Install & Start
1. ⬇️ `yarn` - install dependencies
1. 🖥 `yarn start` - start production server
1. 🧑‍💻 `yarn dev` - start local development server

### Build
1. 🔨 `yarn build` - build for production & output to `dist/` with Vite (Esbuild)

### Test
1. 🧪 `yarn test` - run unit tests & generate coverage report in `coverage/`
1. 🧾 `yarn test:ui` - open unit test UI

### Linting
1. 🧹 `yarn lint` - lint files in `src/`
1. 🧼 `yarn lint:fix` - lint files in `src/` & fix automatically

---
</details>
<details><summary><h2>Files</h2></summary>

- `dist/` - Code output
- `src/` - Project source code
  - `handlers/` - Route Handlers
  - `models/` - Interfaces & classes
  - `services/` - Services
  - `utils/` - Utilities
  - `config.ts` - Environment/global configuration variables
  - `global.d.ts` - Global TypeScript type declarations
  - `server.ts` - Server entrypoint

---
</details>
<details><summary><h2>Workspace</h2></summary>

### Linting
Linting is provided by [ESLint](https://github.com/eslint/eslint) with a custom configurations & the following plugins:
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)
- [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest)

---
</details>
