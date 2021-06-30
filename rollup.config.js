// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.js',
    external: ['lodash', 'jquery'],
    output: {
        file: 'bundle.umd.js',
        name: 'Epg',
        format: 'umd',
        globals: {
            lodash: '_',
            jquery: '$'
        }
    },
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    },
    plugins: [
        resolve(),
        commonjs(),
        json()
        // babel({
        //     exclude: 'node_modules/**', // 防止打包node_modules下的文件
        //     runtimeHelpers: true // 使plugin-transform-runtime生效
        // })
    ]
};
