 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: {
         app: './src/index.js',
         another: './src/another-module.js'
       },
   plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
               title: 'Caching'
     })
   ],
   output: {
         filename: '[name].[chunkhash].js',
             path: path.resolve(__dirname, 'dist')
       },
         module:{
             rules: [
                 {
                     test: /\.m?js$/,
                     exclude: /(node_modules|bower_components)/,
                     use: {
                         loader: 'babel-loader',
                         options: {
                             presets: ['@babel/preset-env']
                         }
                     }
                 },
                 {
                     test: /\.css$/,
                     use: [
                         'style-loader',
                         'css-loader'
                     ]
                 },
                 {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                         'file-loader'
                     ]
                 },
                 {
                     test:/\.(woff|woff2|eot|ttf|otf)$/,
                     use: [
                         'file-loader'
                     ]
                 },
                 {
                     test: /\.(csv|tsv)$/,
                     use: [
                         'csv-loader'
                     ]
                 },
                 {
                     test: /\.xml$/,
                     use: [
                         'xml-loader'
                     ]
                 }
             ]
   },
         optimization: {
             splitChunks: {
                 chunks: "all"
             }
         }
     };