export default[
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'comma-dangle': ['error', 'never']
    }
  }
];
