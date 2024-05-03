module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    camelcase: ["off"],
    "global-require": ["off"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": 0,
    "no-console": ["off"],
    "no-debugger": ["off"],
    "no-shadow": "off",
    "no-undef": ["off"],
    "no-use-before-define": 0,
    "prefer-object-spread": ["off"],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/prefer-stateless-function": ["off"],
    "react/require-default-props": ["off"],
    "react/prop-types": 0,
    "react/no-unused-prop-types": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // override for ts, tsx
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/no-var-requires": ["off"],
  },
  overrides: [
    {
      files: [".ts", ".tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["warn"],
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*/store//-slice.ts"],
      rules: {
        "no-param-reassign": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
