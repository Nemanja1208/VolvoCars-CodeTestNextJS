module.exports = {
    trailingComma: 'all',
    singleQuote: true,
    endOfLine: 'auto',
    arrowParens: 'avoid',
    importOrder: [
      '^(react|react-dom)$',
      '<THIRD_PARTY_MODULES>',
      '^(\\.|@/|/)',
    ],
    importOrderSeparation: true,
  };