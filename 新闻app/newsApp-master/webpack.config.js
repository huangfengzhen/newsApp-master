var webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require('html-webpack-plugin');

  const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
  ];


module.exports = {
  entry: __dirname + "/source/js/root.jsx",
  output: {
    path: __dirname + "/bulid/",
    filename: "js/bulid.js",
    publicPath: ""
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      },
      {
       test: /\.(svg)$/i,
       loader: 'svg-sprite',
       include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
     },
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: "./bulid/",
    port:8888
  },
  plugins: [new HtmlWebpackPlugin({title: "my react app", filename: 'index.html', template: "source/template/index.html"})],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: {
    hints: false
  }
}
