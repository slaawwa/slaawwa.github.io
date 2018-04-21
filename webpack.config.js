
var argv = require('yargs').argv,
    fs = require('fs'),
    // marked = require('marked'),
    webpack = require('webpack'),
    // HTMLWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    // vueLoader = require('vue-loader'),
    path = require('path'),
    extractLESS = new ExtractTextPlugin({
        filename: '[name].[contenthash:10].css',
        disable: false,
    }),
    cnf = require('./webpack.cnf')({
        entry: {
            // _assets: path.join(__dirname, 'app', 'js', 'main.js'),
            // vuejs: path.join(__dirname, 'app', '_vuejs', 'index.js'),
        },
        plugins: [
            extractLESS,
            new CopyWebpackPlugin([{
                from: __dirname + '/app/_pages',
                to: __dirname + '/dist',
            }]),
            /*new HTMLWebpackPlugin({
                filename: `index.html`,
                template: `./app/_vuejs/index.pug`,
                chunks: [
                    //'_assets',
                    'vuejs',
                ],
                content: marked(fs.readFileSync(`${__dirname}/README.md`, 'utf8')),
                title: 'ttt',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
            }),*/
        ],
    });


argv.env = argv.env? argv.env: {};
if (argv.env.dev && argv.env.dev != 'false' && argv.env.dev != 'true') argv.env.dev = `"${argv.env.dev}"`;
const isDev = argv.env.dev? JSON.parse(argv.env.dev): true,
    isProd = !isDev;

console.info('isDev:', isDev);
console.info('isProd:', isProd);


let extractCSS = new ExtractTextPlugin({
    filename: 'style-[contenthash:10].css',
}),
cssIdentifier = isProd ? '[hash:base64:10]' : '[path][name]---[local]',
cssLoader = extractCSS.extract({
    use: 'css-loader?minimize&localIdentName=' + cssIdentifier
});

cnf.plugins.push(
    new webpack.DefinePlugin({
        isDev,
        isProd,
        ...(isProd? {'process.env': {NODE_ENV: `'production'`}}: {}),
        // readmeContent: JSON.stringify(marked(fs.readFileSync(`${__dirname}/README.md`, 'utf8'))),
    })
);

var defConfig = {
    entry: cnf.entry,
    output: {
        publicPath: '/',
        // filename: isDev? '[name].js': '[name]-[chunkhash:10].js',
        filename: isProd ? '[name].[hash:12].min.js' : '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: cnf.plugins,
    // plugins: [
    //     /*extractCSS,*/
    //    /* new HTMLWebpackPlugin({
    //         filename: path.join(__dirname, 'dist', 'index.html'),
    //         template: path.join(__dirname, 'app', 'index.html'),
    //         // filename: 'index.html'
    //         // template: '../app/index.html',
    //     }),*/
    //     new CopyWebpackPlugin([{
    //         from: __dirname + '/app/_pages',
    //         to: __dirname + '/dist',
    //     }]),
    //     // new webpack.NoErrorsPlugin(),
    //     new HTMLWebpackPlugin({
    //         filename: 'index.html',
    //         template: './app/index.pug',
    //         minify: {
    //             removeComments: true,
    //             collapseWhitespace: true
    //       }
    //     }),
    //     new HTMLWebpackPlugin({
    //         filename: 'login.html',
    //         template: './app/views/pages/login.pug',
    //         minify: {
    //             removeComments: true,
    //             collapseWhitespace: true,
    //         },
    //     }),
    // ],
    watch: isDev,
    devtool: isDev? 'cheap-inline-module-source-map': false,
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    /*vue: {
        loaders: {
            // css: ExtractTextPlugin.extract("css"),
            // you can also include <style lang="less"> or other langauges
            less: extractLESS.extract("css!less"),
        }
    },*/
    module: {
        // loaders: [
        //     // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
        //     {
        //         test: /\.jpg$/,
        //         loader: 'file-loader',
        //     },
        //     // { test: /\.jade$/, loader: 'jade-loader' }
        // ],
        rules: [


        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { 'modules': false }],
                        'stage-2',
                        // 'stage-0',
                    ],
                    comments: false,
                    // plugins: ['transform-runtime', 'babel-plugin-transform-runtime', 'babel-plugin-transform-object-rest-spread'],
                },
            }],
            include: [`${__dirname}/app`],
            /*exclude: function(modulePath) {
                return /node_modules/.test(modulePath) &&
                    !/node_modules\/vue-particles/.test(modulePath);
            },*/
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.pug$/,
            use: ['pug-loader']

            // loaders: [
            //   { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            //   { test: /\.png$/, loader: 'file-loader' },
            //   { test: /\.jade$/, loader: 'jade-loader' }
            // ]


        }, {
            test: /\.less$/,
            use: extractLESS.extract({
                use: [/*{
                    loader: 'vue-style-loader',
                }, */{
                    loader: 'css-loader?minimize',
                }, {
                    loader: 'less-loader',
                }],
                // fallback: 'style-loader'
            })
        }, {
            test: /\.css$/,
            use: cssLoader,
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    },
                    babel: {
                        babelrc: false,
                        presets: ['es2015', 'stage-2'],
                        // plugins: ['transform-runtime', 'babel-plugin-transform-runtime', 'babel-plugin-transform-object-rest-spread']
                    },
                },
            }/*, 'babel-loader'*/],
            // use: vueLaoder,
            // exclude: /node_modules/,
            // options: {
                // loaders: {
                    // css: ExtractTextPlugin.extract({
                    /*css: extractLESS*//*.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader',
                    }),*/
                    /*less: extractLESS.extract({
                        use: [{
                            loader: 'css-loader?minimize',
                        }, {
                            loader: 'less-loader',
                        }],
                        fallback: 'style-loader'
                    }),*/
                // }
            // },
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)?$/,
            // use: 'file-loader?name='+(isDev? 'img/[name].[ext]': 'img/[hash:8].[ext]'),
            use: 'file-loader?name='+(isDev? 'img/[name].[ext]': 'img/[name].[ext]'),
            // use: 'file-loader?name=public/fonts/[name].[ext]',
        }, /*{
            test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader?name='+(isDev? 'fonts/[name].[ext]': 'fonts/[hash:8].[ext]'),
            // use: 'file-loader?name=public/fonts/[name].[ext]',
        }, {
            test: /\.ico$/,
            use: [{
                loader: 'url-loader?limit=10000&name=img/favicon.ico',
                query: { mimetype: "image/x-icon" },
            }]
        }*/





        /**
         * NOTE: For link need npm i eslint eslint-friendly-formatter eslint-loader -D
         */
        // "eslint": "^4.19.1",
        // "eslint-friendly-formatter": "^4.0.0",
        // "eslint-loader": "^2.0.0",
        // 
        //   .../*(config.dev.useEslint? */[{
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   // enforce: 'pre',
        //   // include: [resolve('src'), resolve('test')],
        //   /*options: {
        //       formatter: require('eslint-friendly-formatter'),
        //       // emitWarning: !config.dev.showEslintErrorsInOverlay
        //   }*/
        // }] /*: [])*/,


        ],
    }
}
if (isDev) {
    defConfig.devServer = {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        // hot: true,
        port: 88,
        host: 'localhost',
        // filename: '[name].js',
        publicPath: '/',
        disableHostCheck: true,
        stats: {
            colors: true,
        },
    };
    defConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
} else {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    defConfig.plugins.push(
        new UglifyJsPlugin({
            sourceMap: false,
            // compress: { warnings: false },
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: { warnings: false },
        }),*/
    );
}

module.exports = defConfig;
