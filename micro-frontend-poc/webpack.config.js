const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

var publicUrl = './public';

const port = process.env.PORT || 3001;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash:8].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "home",
            filename: "remoteEntry.js",
            remotes: {
                nav: "nav@http://localhost:3002/remoteEntry.js",
                footer:"footer@http://localhost:3003/remoteEntry.js"
            },
            exposes: {},
            shared: ['react', 'react-dom', '@material-ui/core', '@material-ui/icons']
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
            PUBLIC_URL: publicUrl
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true // To enable hot reloading
    },
    target: 'web' // Webpack fix to HMR hot reload
};