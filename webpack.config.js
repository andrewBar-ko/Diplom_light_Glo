const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,  
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader'],
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "main.css"})
    ]
};
