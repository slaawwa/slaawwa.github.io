'use strict';

let path = require('path'),
    fs = require('fs'),
    marked = require('marked'),
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
                        let readme = `${__dirname}/README.md`;
                        /*if (module === 'index' && fs.existsSync(readme)) {
                            readme = fs.readFileSync(readme, 'utf8');
                            htmlOpt.content = marked(readme);
                        }*/
                        plugins.push(new HTMLWebpackPlugin({
                            filename: `${module}.html`,
                            template: `./app/views/pages/${module}/index.pug`,
                            ...(existJS
                                ? {chunks: [/*'_assets',*/ module]}
                                : {chunks: []}
                            ),
                            minify: {
                                removeComments: true,
                                collapseWhitespace: true,
                            },
                            ...(module === 'readme' && fs.existsSync(readme)
                                ? {content: marked(fs.readFileSync(readme, 'utf8'))}
                                : {}
                            ),
                        }));
                    }
                    // let module = module.substring(1, -3);
                    // console.log(' - pug:', module, curPath);
                    if (existJS) {
                        entry[module] = path.join(__dirname, `app/views/pages/${module}/index.js`)
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
