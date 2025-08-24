const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',  //源映射，找到具体报错的文件
    devServer: {
        static: './dist',
         hot: true,
    },
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'print',
        },
        print: {
            import: './src/print.js',
        }
    },
    output: {
        filename: '[name].[contenthash].js', //使用[name]占位符，根据entry的key生成对应的文件名
        path: path.resolve(__dirname, 'dist'),
        clean: true, //每次清空dist目录
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    optimization: {
        moduleIds: 'deterministic', //使用确定的模块id，避免因为模块内容变化导致hash变化,比如第三库不变化
        runtimeChunk: 'single', //将运行时代码拆分成单独的代码块
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors', //将第三库单独打包
                    chunks: 'all',
                },
            },
        },
    },
};