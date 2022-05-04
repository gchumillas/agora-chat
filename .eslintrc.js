module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'es2021': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': ['react'],
  'rules': {
    'eqeqeq': 0, // the server may return string or numbers indistinctly
    'camelcase': 0, // the server may return snake_case variables
    'no-console': 0,
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-multi-spaces': 2,
    'no-unused-vars': [
      'warn',
      { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }
    ],
    'comma-dangle': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'mode': 'strict' }],
    'react/react-in-jsx-scope': 0, // latest versions do not require to import React
    'react/prop-types': 0, // inline documenttion is shorter
    'react/display-name': 0, // the filename already corresponds to the component name (don't repeat yourself)
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]
  }
}
