const webpack = require('webpack');
module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js',
    ],
    output: {
        path: '/public',
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public',
        historyApiFallback: true
    },
    plugins: [],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-0', 'react']
                    }
                },
                exclude:/node_modules/,

            },
            {
                test:/\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
                exclude:/node_modules/,

            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },

        ],
    },

};