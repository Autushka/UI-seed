'use strict';

module.exports = {
    root: 'src/build',
    indexLocation: 'src/templates/index.html',
    libjs: {
        src: [
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
            'systemjs.config.js'
        ],
        dest: 'src/build/js/'
    },
    libcss: {
        src: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'src/build/css/'
    }
};
