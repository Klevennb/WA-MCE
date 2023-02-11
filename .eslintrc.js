module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [    "react",
    "import",
    "react-hooks",
    "unused-imports",
        "jsx-a11y",

    "@typescript-eslint"],
    
  rules: {
    "react/destructuring-assignment": 1,
        "arrow-body-style": 0,

    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "react/react-in-jsx-scope": "off",
    "default-param-last": ["warn"],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
      },
    ],
    // Prop-Types
    "react/prop-types": ["warn"],
    "react/forbid-prop-types": ["warn"],
    "react/no-unused-prop-types": ["warn"],
    "react/require-default-props": ["warn"],
    "react/default-props-match-prop-types": ["warn"],
    "react/jsx-filename-extension": [
      "off",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        exceptions: [
          "input",
          "Input",
          "Route",
          "select",
          "TextField",
          "FieldArray",
          "CloseButton",
          "MonthElement",
          "Autocomplete",
          "StyledTextField",
          "SingleDatePicker",
        ],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error"
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "@typescript-eslint/no-shadow": ["warn"],
    "@typescript-eslint/default-param-last": ["warn"],
    // AirBnB's outdated "babel-preset-airbnb"
    "react/static-property-placement": ["error", "static public field"],
    "react/state-in-constructor": ["error", "never"],
    // ESLint Disable Directives
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/require-description": ["warn"],
        // A11Y
    "jsx-a11y/alt-text": ["warn"],
    "jsx-a11y/label-has-associated-control": ["warn"],
    "jsx-a11y/click-events-have-key-events": ["warn"],
    "jsx-a11y/no-static-element-interactions": ["warn"],
    "jsx-a11y/no-noninteractive-element-interactions": ["warn"],
    "no-pluspule": "off", 
    "operator-assignment": "off",
     "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
  },
};
