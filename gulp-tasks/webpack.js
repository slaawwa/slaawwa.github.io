'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    argv = require('yargs').argv,
    named = require('vinyl-named'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');

argv.env = argv.env? argv.env: {};
if (argv.env.dev && argv.env.dev != 'false' && argv.env.dev != 'true') argv.env.dev = `"${argv.env.dev}"`;
const isDev = argv.env.dev? JSON.parse(argv.env.dev): true,
    isProd = !isDev;

console.log('isDev:', isDev)
console.log('isProd:', isProd)

exports.task = function(callback) {

    let firstBuildReady = false;

    function done(err, stats) {
        firstBuildReady = true;
        if (err) return;
        if (stats.hasErrors()) {
            console.error(`${stats.toString({
                colors: true,
            })}`);
        } else {
            console.info(`${stats.toString({
                colors: true,
            })}`);
        }
    }

    let extractCSS = new ExtractTextPlugin({
        filename: 'style-[contenthash:10].css',
    }),
    cssIdentifier = isProd ? '[hash:base64:10]' : '[path][name]---[local]',
    cssLoader = extractCSS.extract({
        use: 'css-loader?minimize&localIdentName=' + cssIdentifier
    });

    var webpackStream = require('webpack-stream'),
        webpack = webpackStream.webpack,
        options = {
            /*entry: {
                main: '/app/main.js',
            },*/
            output: {
                publicPath: '/',
                filename: isDev? '[name].js': '[name]-[chunkhash:10].js',
            },
            plugins: [
                /*extractCSS,
                new HTMLWebpackPlugin({
                    // template: 'index-template.html'
                    template: 'src/index.html',
                }),*/
                new webpack.NoErrorsPlugin(),
            ],
            watch: isDev,
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                inline: true,
                hot: true,
            },
            devtool: isDev? 'cheap-inline-module-source-map': false,
            module: {
                rules: [{
                    test: /\.js$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["es2015", { "modules": false }],
                                // "es2015",
                                "stage-0",
                            ]
                        }
                    }],
                    exclude: /node_modules/
                }, {
                    test: /\.html$/,
                    use: ['html-loader']
                }, {
                    test: /\.css$/,
                    use: cssLoader,
                    exclude: /node_modules/
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
        };

    return gulp.src('./app/js/*.js')
        .pipe($.plumber(/*{
            errorHandler: 
        }*/))
        .pipe(named())
        .pipe(webpackStream(options, null, done))
        .pipe(gulp.dest('dist/js'))
        .on('data', function() {
            if (firstBuildReady && !callback.called) {
                callback.called = true;
                callback();
            }
        });

};
