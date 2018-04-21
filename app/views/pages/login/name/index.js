'use strict';

// import './name.less';
// import pugName from './name.pug';
// import jump from './jump.jpg';
require('./name.less');
let pugName = require('./name.pug');
let jump = require('./jump.jpg');

// export default name => {
module.exports = name => {
    console.log(`Name: ${name}`);
    $('button').after(pugName({
        name,
        jump,
    }))
}
