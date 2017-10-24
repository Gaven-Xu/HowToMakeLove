const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:__dirname + "/app/main.js",
    output:{
        path:__dirname + "/build",
        filename: "bundle.js"
    },
    devtool:"eval-source-map",
    devServer:{
        contentBase:'./public', // 本地服务器加载页面所在的目录，监听目录
        historyApiFallback:true, // true 所有跳转都指向index.html
        inline:true //实时刷新
    },
    module:{
        rules : [
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude: /node_modules/
            },{
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ],
                exclude:/node_modules/
            },{
                test:/\.scss$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:"sass-loader"
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
}
//  nodejs 中 __dirname 是一个全局变量，表示脚本执行所在的目录，这里指的就是webpack目录

/**
npm start
npm run start

npm run [script name]

start 是特殊命令，可以省略run，其它命令不行
*/ 
