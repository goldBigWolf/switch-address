
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'SwitchAddress',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    // globalObject: 'this'
    // umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          { 
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      // {
      //   test: /\.js$/,
      //   loader: 'source-map-loader'
      // }
    ],
    // unknownContextCritical : false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      tslint: path.resolve(__dirname, './tslint.json'),
    }),
  ],
}