const path = require('path');
const webpack = require('webpack');
const Config = require('tdtool').Config;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isDebug = process.env.NODE_ENV !== 'production';
// 引入公共dll包，包含react、react-dom、react-router4、mobx、mobx-react、mobx-react-router、moment及es5的一些polyfill
// 引入dll包为了加快编译速度
const dllPath = path.resolve(process.cwd(), 'node_modules/td-react-vendor', isDebug ? 'dll-dev' : 'dll');
const vendor1 = new webpack.DllReferencePlugin({
  manifest: require(path.join(dllPath, 'vendor1.js.json')),
  name: 'vendor1_library'
});
const vendor2 = new webpack.DllReferencePlugin({
  manifest: require(path.join(dllPath, 'vendor2.js.json')),
  name: 'vendor2_library'
});
const CopyWebpackPlugin = require('copy-webpack-plugin');

const clientConfig = new Config({
  entry: {
    home: './src/home',
    demo: './src/demo'
  },
  alias: {
    utils: path.resolve(process.cwd(), 'src/utils')
  },
  sourceMap: true,
  devtool: "source-map",
  filename: '[name].[hash].js',
  minimize: !isDebug,
  extends: [['react', {
    plugins: [
      ["import", { libraryName: "td-ui", style: true }]  // 引入td-ui组件
    ]
  }], ['less', {
    extractCss: {
      filename: '[name].[hash].css',
      allChunks: true
    },
    happypack: true  // 启动多线程编译，加快编译速度
  }]],
  env: {
    __DEV__: isDebug
  },
});

clientConfig.add('plugin.vendor1', vendor1);
clientConfig.add('plugin.vendor2', vendor2);
clientConfig.add('output.path', path.join(process.cwd(), 'dist', 'client'));
clientConfig.add('output.chunkFilename', '[name].[chunkhash].chunk.js');
const AssetsPlugin = require('assets-webpack-plugin');
clientConfig.add(
  'plugin.AssetsPlugin',
  new AssetsPlugin({
    path: './dist/client',
    filename: 'assets.json',
    prettyPrint: true,
  })
);
if (isDebug) {
  clientConfig.add('plugin.copydll', new CopyWebpackPlugin([{ from: 'node_modules/td-react-vendor/dll-dev', to: 'dll' }]));
} else {
  clientConfig.add('plugin.copydll', new CopyWebpackPlugin([{ from: 'node_modules/td-react-vendor/dll', to: 'dll' }]));
}
clientConfig.add('output.publicPath', '/');

const serverConfig = new Config({
  entry: './src/server/main',
  target: 'node',
  filename: 'server.js',
  sourceMap: true,
  devServer: true,
  externals: [/^\.\/client\/assets\.json$/, require('webpack-node-externals')()],
});

module.exports = [clientConfig.resolve(), serverConfig.resolve()];