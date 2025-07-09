This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules and precommit hooks with the help of husky.

Process to install and setup the project  :- 

1. npm create vite@latest my-react-app -- --template react

2. npm install eslint

3. npx init @eslint/config (this will create the new flat eslint.config.js file, is case dont work please paste the contant whic i have inthe project)

4. npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier (this will install the prettier)

5. Create .prettierrc file ans paste the below  codes
{
  "singleQuote": true,
  "semi": true,
  "printWidth": 80,
  "trailingComma": "es5"
}

6. Create .prettierignore ans paste the below code
node_modules
build
dist

7. npx husky-init && npm install( install pre commit hooks husky)

8. npm install --save-dev lint-staged

9. Enable the pre-commit hook:
npx husky set .husky/pre-commit "npx lint-staged"
