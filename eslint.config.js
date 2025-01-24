import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
    },
  },
  configPrettier,
];
