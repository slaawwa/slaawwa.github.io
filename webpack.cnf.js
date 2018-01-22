'use strict';

let path = require('path'),
    fs = require('fs'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    pathDir = `${__dirname}/app/views/pages/`,
    getCnf = pathDir => {
        
        let entry = {},
            plugins = [];

        fs.readdirSync(pathDir)
            .forEach(function(module, index){
                var curPath = pathDir + module;
                if (fs.lstatSync(curPath).isDirectory()) {
                // if (fs.lstatSync(curPath).isFile() && curPath.endsWith('.pug')) {
                    var existJS = fs.existsSync(`${curPath}/index.js`),
                        existPUG = fs.existsSync(`${curPath}/index.pug`);
                    // if (module !== 'common' && existJS && existPUG) {
                    //     entries(module);
                    // }
                    if (existPUG) {
                        plugins.push(new HTMLWebpackPlugin({
                            filename: `${module}.html`,
                            template: `./app/views/pages/${module}/index.pug`,
                            chunks: [/*'_assets',*/ module],
                            minify: {
                                removeComments: true,
                                collapseWhitespace: true,
                            },
                        }));
                    }
                    // let module = module.substring(1, -3);
                    // console.log(' - pug:', module, curPath);
                    if (existJS) {
                        entry[module] = path.join(__dirname, 'app', 'views', 'pages', module, 'index.js')
                    }
                }
            });
        
        // main: path.join(__dirname, 'app', 'js', 'main.js'),

        return {
            entry,
            plugins,
        };
    };

console.log('pathDir:', pathDir)


module.exports = ({entry={}, plugins=[]}) => {

    let cnf = getCnf(pathDir);

    return {
        entry: Object.assign(cnf.entry, entry),
        plugins: plugins.concat(cnf.plugins),
    };
}
