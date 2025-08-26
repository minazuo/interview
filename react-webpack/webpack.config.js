const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
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
    resolve: {
       
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, "../src"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'static/images/[name][ext]', // 文件输出目录和命名
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 匹配视频和音频文件
                type: 'asset/resource',
                generator: {
                    filename: 'static/videos/[name][ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name][ext]',
                }
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        moduleIds: 'deterministic', //使用确定的模块id，避免因为模块内容变化导致hash变化,比如第三库不变化
        runtimeChunk: 'single', //将运行时代码拆分成单独的代码块
        usedExports: true,
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