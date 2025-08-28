import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.config(pluginReact.configs.recommended),
  ...compat.config(pluginReactHooks.configs.recommended),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "eslint.config.mts",
      "jest.config.ts",
      "jest.config.js",
      "jest.setup.ts",
      "**/*.test.{js,jsx,ts,tsx}",
      "**/__tests__/**",
      "coverage/**",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks
    },
    rules: {
      "no-console": "warn",
      "react/jsx-no-useless-fragment": "error",
      "react-hooks/exhaustive-deps": "off",
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["**/*.test.{ts,tsx}", "**/__tests__/**"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      ...(tseslint.configs.recommendedTypeChecked["rules"] as Record<string, unknown>),
      ...(tseslint.configs.stylistic["rules"] as Record<string, unknown>),
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  // Configuration for Jest test files
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    // You can add specific rules for test files here if needed
    rules: {
      // For example, you might want to allow certain practices in test files
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-no-useless-fragment": "off",
    }
  },
  // Configuration for tailwind.config.js
  {
    files: ["tailwind.config.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      "no-undef": "off"
    }
  }
] as const;