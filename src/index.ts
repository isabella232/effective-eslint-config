/* eslint-disable filenames/match-exported, import/order */
import { ESLintConfig } from "./types"
import { createReactApp } from "./modules/createReactApp"
import { airbnb } from "./modules/airbnbInspired"
import { quality } from "./modules/quality"
import { formatting } from "./modules/formatting"
import { typescriptOverride } from "./modules/typescriptOverride"

const config: ESLintConfig = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    "shared-node-browser": true
  },

  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [ ".js", ".jsx", ".ts", ".tsx", ".json" ],
        alias: {
          "-": "./src/"
        }
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [ ".ts", ".tsx" ]
    },
    react: {
      version: "16.10"
    }
  },

  parser: "@typescript-eslint/parser",

  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "jsdoc",
    "shopify",
    "unicorn",
    "jest",
    "filenames"
  ],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },

    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true
  },

  rules: {
    ...createReactApp,
    ...airbnb,
    ...quality,
    ...formatting,
    ...typescriptOverride
  },

  overrides: [
    {
      // Relax a few rules inside tests
      files: [
        "*.test.js",
        "*.test.jsx",
        "*.test.ts",
        "*.test.tsx",
        "**/test/**/*.{js,jsx,ts,tsx}"
      ],
      env: {
        jest: true,
        "jest/globals": true
      },
      rules: {
        "@typescript-eslint/no-magic-numbers": "off",
        "no-redeclare": "off",
        "func-names": "off",
        "react/display-name": "off",
        "jsx-a11y/click-events-have-key-events": "off"
      }
    },
    {
      // Definition files are typically really TS specific and
      // do not work in the same way as normal TS files.
      files: [ "*.d.ts", "*.d.tsx" ],
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ]
}

export default config
