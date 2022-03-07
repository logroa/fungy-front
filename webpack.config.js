var path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: { // new concept, loaders
        rules: [
          {
            test: /\.js$/,
            //include: path.resolve('./src/index.js'), // file to transpile
            exclude: /node_modules/,
            loader: "babel-loader", // loaders referenced
            //exclude: /node_modules/, // we do not need to transpile other libraries
            //query: require('./.babelrc'), // reference to babel rules
          },
          {
            test: /\.html$/,
            loader: "html-loader"
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
    plugins: [
        htmlPlugin
    ]
}
