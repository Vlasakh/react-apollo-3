module.exports = {
  // ignore: ['react/dst/**'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12',
        },
      },
    ],
  ],
  plugins: [
    // ["@babel/plugin-proposal-decorators", {decoratorsBeforeExport: true}],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-export-default-from'],
    // '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  exclude: [
    // '/node_modules\\/*jss*/',
  ],
  comments: false,
  sourceMaps: 'inline',
};
