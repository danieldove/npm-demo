 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const WorkboxPlugin = require('workbox-webpack-plugin');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   plugins: [
       new WorkboxPlugin.GenerateSW({
           clientsClaim: true,
           skipWaiting: true
       }),
       new UglifyJSPlugin({
           sourceMap: true
       })
   ]
 });