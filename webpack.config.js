var path = require('path')
const { IgnorePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',
  entry: [
    path.join(__dirname, 'src/lambdas/external/transaction/index.ts'),
    path.join(__dirname, 'src/lambdas/external/validations/index.ts'),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: path.resolve(__dirname, '.localenv/dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new IgnorePlugin({
      resourceRegExp: /^pg-native$/,
    }),
  ]
}
