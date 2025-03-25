const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['!.storybook/*', '.eslintrc.js'],
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  overrides: [
    {
      // default router of nextjs
      files: ['src/app/**/*.tsx', 'src/app/*.tsx'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      // files only used in the folder
      files: [
        '**/constants.*',
        '**/animation.*',
        '**/stories.*',
        '**/helpers.*',
        '**/validation.*',
        'src/templates/**/index.tsx'
      ],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      // components of pages
      files: ['**/templates/**/index.*'],
      rules: {
        'react/display-name': 'off',
        'react/function-component-definition': 'off'
      }
    },
    {
      // not necessary to know the type because it could be anything
      files: ['**/animation.*', '**/helpers.*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      // don't need type on styles
      files: ['**/styles.*'],
      rules: {
        '@typescript-eslint/no-unsafe-return': 'off'
      }
    }
  ],
  rules: {
    "no-console": ["warn", { allow: ["none"] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react-hooks/exhaustive-deps': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],
  }
};
