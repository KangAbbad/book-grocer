module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["react"],
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "max-len": [1, 1200, 2, { "ignoreComments": true }],
    "no-console":[1],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "react/jsx-uses-vars": [2],
    "no-loop-func":[1],
    "indent": ["error", 2],
    "no-unreachable" : 'warn',
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "react/prop-types": 0
  }
}
