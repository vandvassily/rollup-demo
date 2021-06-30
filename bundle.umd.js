(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash'), require('jquery')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lodash', 'jquery'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Epg = {}, global._, global.$));
}(this, (function (exports, _, $) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
    var $__default = /*#__PURE__*/_interopDefaultLegacy($);

    let count = 0;

    function increase() {
        count++;
    }

    var version = "0.0.1";

    // const _ = require('lodash');

    const person = {
        name: '小明',
        age: 12,
        birth: 1989
    };

    function main() {
        console.log(___default['default'].add(1, 2));
        console.log(`version is ${version}`);
        console.log($__default['default']('#app'));
        const { name, age, birth } = person;

        console.log(name, age, birth);
        // console.log(_.add(1, 2));
    }

    function click() {
        console.log(count);
        increase();
        console.log(count);
    }

    exports.click = click;
    exports.main = main;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
