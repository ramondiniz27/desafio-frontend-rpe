import storybook from 'eslint-plugin-storybook';

import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.config(pluginReact.configs.recommended),
  ...compat.config(pluginReactHooks.configs.recommended),
  pluginReactJsxRuntime,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'eslint.config.mts',
      'jest.config.ts',
      'jest.config.js',
      'jest.setup.ts',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/__tests__/**',
      'coverage/**',
      '.storybook/**',
      '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      'src/index.tsx',
      'src/mocks/browser.ts',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/jsx-no-useless-fragment': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react/no-unescaped-entities': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: [
      '**/*.test.{ts,tsx}',
      '**/__tests__/**',
      'src/index.tsx',
      'src/mocks/browser.ts',
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...(tseslint.configs.recommendedTypeChecked['rules'] as Record<
        string,
        unknown
      >),
      ...(tseslint.configs.stylistic['rules'] as Record<string, unknown>),
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Configuration for tailwind.config.js
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
] as const;
