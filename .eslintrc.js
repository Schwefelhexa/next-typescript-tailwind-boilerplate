module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*(QUERY|MUTATION).*' },
    ],
    'jsx-a11y/alt-text': [
      'error',
      {
        img: ['BlurhashImage'],
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off', // Next.JS's Link already enforces href
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/indent': 'off', // Prettier to the rescue
    'react/jsx-one-expression-per-line': 'off', // Nah, I think its clearer on one line
    'react/jsx-curly-newline': 'off', // Prettier already does this
  },
};
