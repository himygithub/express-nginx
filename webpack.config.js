var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');
 
module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        // testReact : './public/javascripts_dist/common/testReact.js'
        getMsg : './public/javascripts_dist/appChannel/getMsg.js'
    },
    //入口文件输出配置
    output: {
        // path: '',
        //filename: 'public/javascripts/common/[name].js'
        filename: 'public/javascripts/appChannel/[name].js'
    },
    module: {
        //加载器配置
         rules: [
             {
                test: /\.css$/,
                use: [
                 {
                   loader: "style-loader"
                 },
                 {
                   loader: "css-loader",
                   options: {
                     modules: true
                   }
                 }
                ]
             },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
        /*loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]*/
    },
    //其它解决方案配置
    resolve: {
        // extensions: ['', '.js', '.json', '.scss']
/*        //查找module的话从这里开始查找
        root: 'E:/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        ,
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }*/
    }
};