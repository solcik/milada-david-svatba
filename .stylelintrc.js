module.exports = {
  plugins: [],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
  },
};
