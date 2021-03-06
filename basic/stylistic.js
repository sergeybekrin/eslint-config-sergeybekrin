module.exports = {
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-body-style': 'off',
        'arrow-parens': [ 'error', 'as-needed', {
            requireForBlockBody: false
        }],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        camelcase: [ 'error', { properties: 'always' }],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-names': 'error',
        'func-name-matching': 'error',
        'func-style': 'off',
        'generator-star-spacing': 'error',
        'id-blacklist': 'error',
        'init-declarations': 'error',
        'id-length': 'off',
        // From https://github.com/kentcdodds/eslint-config-kentcdodds/blob/master/stylistic.js#L39
        'id-match': [ 'error', '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$' ],
        indent: [ 'error', 2, { SwitchCase: 1 }],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'line-comment-position': 'off',
        'lines-around-comment': 'off',
        'lines-around-directive': 'off',
        'max-depth': 'error',
        'max-len': 'error',
        'max-lines': 'error',
        'max-nested-callbacks': 'error',
        'max-params': [ 'error', 7 ],
        'max-statements-per-line': [ 'error', {
            max: 2
        }],
        'max-statements': 'off',
        'multiline-ternary': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [ 'error', {
            max: 1,
            maxEOF: 1,
            maxBOF: 0
        }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-spaced-func': 'error',
        'no-tabs': 'error',
        'no-tabs': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'off',
        'object-curly-spacing': [ 'error', 'never', {
            arraysInObjects: false,
            objectsInObjects: false
        }],
        'object-property-newline': [ 'error', {
            allowMultiplePropertiesPerLine: true
        }],
        'object-shorthand': [ 'error', 'properties' ],
        'one-var-declaration-per-line': 'error',
        'one-var': 'off',
        'operator-assignment': 'off',
        'operator-linebreak': [ 'error', 'after' ],
        'padded-blocks': [ 'error', 'never' ],
        'prefer-arrow-callback': [ 'error', {
            allowNamedFunctions: true,
            allowUnboundThis: true
        }],
        'prefer-destructuring': 'off',
        quotes: [ 'error', 'single', {
            allowTemplateLiterals: true
        }],
        'quote-props': [ 'error', 'as-needed' ],
        'require-jsdoc': 'off',
        'rest-spread-spacing': 'error',
        'template-tag-spacing': [ 'error', 'never' ],
        'semi-spacing': 'error',
        'semi': 'error',
        'sort-keys': 'off',
        'sort-keys': 'off',
        'sort-imports': 'warn',
        'space-before-blocks': 'error',
        'space-before-function-paren': [ 'error', 'never' ],
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': 'error',
        'space-unary-ops': [ 'error', {
            words: true,
            nonwords: false
        }],
        'spaced-comment': 'error',
        'template-curly-spacing': 'error',
        'unicode-bom': 'error',
        'wrap-regex': 'off',
        'yield-star-spacing': [ 'error', {
            before: false,
            after: true
        }]
    }
};