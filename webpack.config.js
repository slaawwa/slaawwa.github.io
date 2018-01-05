
var argv = require('yargs').argv,
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    path = require('path');

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



var defConfig = {
    entry: {
        // main: './app/main.js',
        main: path.join(__dirname, 'app', 'js', 'main.js'),
    },
    output: {
        publicPath: '/',
        // filename: isDev? '[name].js': '[name]-[chunkhash:10].js',
        filename: isProd ? '[name].[hash:12].min.js' : '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        /*extractCSS,*/
       /* new HTMLWebpackPlugin({
            filename: path.join(__dirname, 'dist', 'index.html'),
            template: path.join(__dirname, 'app', 'index.html'),
            // filename: 'index.html'
            // template: '../app/index.html',
        }),*/
        new CopyWebpackPlugin([{
            from: __dirname + '/app/_pages',
            to: __dirname + '/dist',
        }]),
        // new webpack.NoErrorsPlugin(),
        new HTMLWebpackPlugin({
          // filename: './dist/index.html',
          template: './app/index.html',
          minify: {
            removeComments: true,
            collapseWhitespace: true
          }
        }),
    ],
    watch: isDev,
    devtool: isDev? 'cheap-inline-module-source-map': false,
    module: {
        loaders: [{
            test: /\.js$/,
            loader:'babel-loader',
            query: {
                presets: ['es2015', 'stage-0'],
            },
        }],
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
            },
            /*use: [{
                options: {
                    presets: [
                        ["es2015", { "modules": false }],
                        // "es2015",
                        "stage-0",
                    ]
                }
            }],*/
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.css$/,
            use: cssLoader,
            exclude: /node_modules/
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)?$/,
            use: 'file-loader?name='+(isDev? 'img/[name].[ext]': 'img/[hash:8].[ext]'),
            // use: 'file-loader?name=public/fonts/[name].[ext]',
        }/*, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'file-loader?name='+(isDev? 'fonts/[name].[ext]': 'fonts/[hash:8].[ext]'),
            // use: 'file-loader?name=public/fonts/[name].[ext]',
        }, {
            test: /\.ico$/,
            use: [{
                loader: 'url-loader?limit=10000&name=img/favicon.ico',
                query: { mimetype: "image/x-icon" },
            }]
        }*/],
    }
}
if (isDev) {
    defConfig.devServer = {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        // hot: true,
        port: 88,
        host: 'loc.swagup.com',
        // filename: '[name].js',
        publicPath: '/',
        disableHostCheck: true,
        stats: {
            colors: true
        },
    };
}

module.exports = defConfig;
