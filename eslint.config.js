import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': 'error', // show Prettier errors in ESLint
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
];
