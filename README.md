# Webpack 5 Module Federation with React

This example shows a basic host application loading remote components

For more information, visit the article explaining this workflow

- `poc` expose header component.
- `poc-nav` import header exposed component from `poc-nav`
- `poc-footer` import header exposed component from `poc-footer`

## Running Demo

Run `npm install` and `npm run dev` inside each repo. This will build and serve your apps on ports `3001`, `3002`, `3003` .

Reference: https://webpack.js.org/concepts/module-federation/