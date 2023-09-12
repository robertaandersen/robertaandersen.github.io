const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, './dist')},
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
         }]
    },
    plugins:[
        new HWP({template: path.join(__dirname,'./src/index.html')})
    ],
    resolve:
    {
        extensions: [ '.tsx', '.ts', '.js' ],
    }
}