const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = require('path').resolve;
const shelljs = require('shelljs');

const env = process.env.NODE_ENV;

const entry = {
  ReactG6: './src/index.jsx',
  G6Plugins: './src/plugins.js'
};

shelljs.ls(resolve(__dirname, 'plugins')).forEach(pluginPath => {
  if (pluginPath !== 'index.js') {
    const moduleName = 'plugin.' + pluginPath;
    entry[moduleName] = `./plugins/${pluginPath}/index.js`;
  } else {
    const moduleName = 'plugins';
    entry[moduleName] = './plugins/index.js';
  }
});

const config = {
  entry,
  output: {
    filename: env === 'development' ? '[name].js' : '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'umd')
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'plugins')
      ],
      loader: 'babel-loader',
      query: {
        plugins: ['lodash'],
      },
    }],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
    },
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes',
    },
    'g6-for-react': {
      root: 'ReactG6',
      commonjs2: 'g6-for-react',
      commonjs: 'g6-for-react',
      amd: 'g6-for-react'
    }
  },

  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      shorthands: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'analyse') {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
    })
  );
}

if (env === 'development' || env === 'production') {
  // umd do not use prop-types as external lib.
  delete config.externals['prop-types'];
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    })
  );
}

module.exports = config;

