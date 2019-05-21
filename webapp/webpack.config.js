module.exports = {
  entry: __dirname + "/app/javascript/packs/index.js",
  output: {
    path: __dirname + 'public/static/webpack', //ビルドしたファイルを吐き出す場所
    filename: '[name].js' //ビルドした後のファイル名
  },
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