const path = require('path');
const merge = require('webpack-merge');
const getBaseConfiguration = require('./webpack/base.config.js');

const libraryName = 'react-grid';

const params = {
  root: __dirname,
  buildPath: 'lib',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
};

const config = merge(getBaseConfiguration(params), {
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
});

module.exports = config;
