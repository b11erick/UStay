const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
      rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
              'css-loader',
              'sass-loader',
            ]
          },
     
        {
            test: /\.html$/,
            use: ['html-loader']
        },
        {
            test: /\.(jpg|png)$/,
            use: [
                {
                    loader: 'file-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
            ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./intro.html",
            template: "./src/intro.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./num.html",
            template: "./src/num.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./pass.html",
            template: "./src/pass.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./reser1.html",
            template: "./src/reser1.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./reser2.html",
            template: "./src/reser2.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./reseres.html",
            template: "./src/reseres.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./rlocal.html",
            template: "./src/rlocal.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./rresu.html",
            template: "./src/rresu.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./pagam.html",
            template: "./src/pagam.html"
        }),
        new HtmlWebPackPlugin({
            filename: "./reserend.html",
            template: "./src/reserend.html"
        })
    ]
}