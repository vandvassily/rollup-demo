import { count, increase } from './utils.js';
import { version } from '../package.json';
import _ from 'lodash';
import $ from 'jquery';
// const _ = require('lodash');

const person = {
    name: '小明',
    age: 12,
    birth: 1989
};

export function main() {
    console.log(_.add(1, 2));
    console.log(`version is ${version}`);
    console.log($('#app'))
    const { name, age, birth } = person;

    console.log(name, age, birth);
    // console.log(_.add(1, 2));
}

export function click() {
    console.log(count)
    increase();
    console.log(count)
}
