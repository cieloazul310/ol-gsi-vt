/* eslint @typescript-eslint/no-var-requires: off */
import * as path from 'path';
import WebpackMerge from 'webpack-merge';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import common from './webpack.common';
const ESlintPlugin = require('eslint-webpack-plugin');

const config = WebpackMerge<Configuration & DevServerConfiguration>(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ESlintPlugin({
      extensions: ['js', 'ts'],
    }),
  ],
});

export default config;
