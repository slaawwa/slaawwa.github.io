'use strict';

import './name.less';
import pugName from './name.pug';

export default name => {
    console.log(`Name: ${name}`);
    $('button').after(pugName({name}))
}
