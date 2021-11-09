const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
    entry: [
        './src/js/index.js',
        './src/styl/index.styl',
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.styl$/,
                include: path.resolve(__dirname, 'src/styl'),
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                                url: false
                            }
                        },
                        {
                            loader: "stylus-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/html/components'),
                use: ['raw-loader']
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/styles.css',
            allChunks: true,
        }),
        new CopyWebpackPlugin([
            {
                from: './src/fonts',
                to: './fonts'
            },
            {
                from: './src/img',
                to: './img'
            },
            {
                from: './src/svg',
                to: './svg'
            },
            {
                from: './src/uploads',
                to: './uploads'
            }
        ]),
    ].concat(htmlPlugins)
};