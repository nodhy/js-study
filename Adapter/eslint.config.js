'use strict';

/*
 * eslint-config-googleの設定を上書きする
 *
 * @see http://eslint.org/docs/user-guide/configuring
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 *
 */
module.exports = {
  rules: {
    'require-jsdoc': [0, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'valid-jsdoc': [0, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
    }],
    'indent': [1, 2],
    'semi': 1,
    'quotes': [1, 'single', {allowTemplateLiterals: true}],
    'no-multi-spaces': 1,
    'eol-last': 1,
    'brace-style': 1,
    'max-len': [1, {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: '^goog\.(module|require)',
    }],
    'object-curly-spacing': 1,
    'comma-dangle': [1, 'always-multiline'],
    'padded-blocks': [1, 'never'],
    'no-var': 1,
    'key-spacing': 1,
    'comma-spacing': 1,
    'space-before-blocks': 1,
    'array-bracket-spacing': [1, 'never'],
    'no-invalid-this': 1,
    'spaced-comment': [1, 'always'],
    'space-before-function-paren': [1, 'never'],
    'no-irregular-whitespace': 1,
    'prefer-rest-params': 1,
    'no-console': 0,
    'no-alert': 1,
    'no-debugger': 1,
  },
};
