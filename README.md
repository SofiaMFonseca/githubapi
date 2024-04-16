# Design Figma for the project [here](https://www.figma.com/file/igQqM14f9sP17jyo54Y8vL/DesafioGithubAPI)

## Correction criteria for this task:

1) Two pages with working routes, navigating between them. 
2) When searching for a user who exists, the user's data should appear according to the layout. 
3) When searching for a user who does not exist, a message should appear according to the layout.

## Layout

![Figma](https://github.com/SofiaMFonseca/assets/blob/main/githubapi/figma-task-githubapi-1.png)

![Figma](https://github.com/SofiaMFonseca/assets/blob/main/githubapi/figma-task-githubapi-2.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
