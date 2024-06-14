module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    'import-notation': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'custom-property-pattern': null,
    'number-max-precision': 8,
    'media-feature-range-notation': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-not-notation': null,
    'function-no-unknown': null,
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "no-duplicate-selectors": null
  },
};
