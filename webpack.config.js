var path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});

const CopyPlugin = require("copy-webpack-plugin")


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
          },
          {
            test: /\.(png|jpe?g|gif|JPE?G|svg)$/,
            use: {
                loader: 'url-loader'
            }
          },
        ]
    },
    plugins: [
        htmlPlugin,
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets'),
                    to: path.resolve(__dirname, 'build', 'assets')
                }
            ],
        })
    ]
}
