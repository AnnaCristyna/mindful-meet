// .eslintrc.js
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:angular/johnpapa',
      'prettier',  // Integração com Prettier
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'angular',
      'prettier',  // Integração com Prettier
    ],
    rules: {
      // Adicione regras personalizadas aqui
    },
};
  