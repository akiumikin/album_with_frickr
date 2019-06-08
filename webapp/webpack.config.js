module.exports = {
  // redux構成、graph-ql構成を切り替える場合にはpacks/xxx/index.jsのxxxを変更する
  entry: __dirname + "/app/javascript/packs/redux/index.js",
  output: {
    path: __dirname + 'public/static/webpack', //ビルドしたファイルを吐き出す場所
    filename: '[name].js' //ビルドした後のファイル名
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env","@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  // Configuration for dev server
  devServer: {
    contentBase: 'public/static', publicPath: '/static/',
    host: '0.0.0.0', port: 3500,
  },
};