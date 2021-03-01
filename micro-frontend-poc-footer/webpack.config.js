const HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

var publicUrl = './public';

const port = process.env.PORT || 3003;
const dependencies = require("./package.json").dependencies;

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
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
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
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "footer",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                // expose each component
                "./Footer": "./src/components/Footer",
                "./FlightBooking": "./src/components/FlightBooking"
            },
            shared: dependencies,
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