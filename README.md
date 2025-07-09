# React + Vite + Husky + pretter + Eslint 

# 1. Create a New Vite React Project
npm create vite@latest my-react-app -- --template react

cd my-react-app

# 2: Install ESLint
npm install eslint

# 3: Initialize ESLint Configuration
npx eslint --init

# 4: Install Prettier and Integrate with ESLint
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

# 5: Create Prettier Configuration
{
  "singleQuote": true,
  "semi": true,
  "printWidth": 80,
  "trailingComma": "es5"
}

# 6. Create .prettierignore and Paste the below code
node_modules
build
dist

# 7: Set Up Husky for Pre-commit Hooks
npx husky-init && npm install
This creates a .husky folder and a default pre-commit hook.

# 8:Configure the Pre-commit Hook
npx husky set .husky/pre-commit "npx lint-staged"


# 9:Add lint-staged Configuration(inside package.json)
"lint-staged": {
  "*.{js,jsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}


Use npm run lint or npx eslint . to lint your project manually.

Pre-commit hooks automatically lint and format only changed files before committing.

You can customize ESLint and Prettier rules to match your team’s coding style.

