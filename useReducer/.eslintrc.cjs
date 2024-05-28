module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
