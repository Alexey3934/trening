import {capitalize} from '../scr/capitalize.js';
import {strict as assert} from 'assert';

assert.strictEqual(capitalize('hello'), 'Hello');

assert.strictEqual(capitalize(''), ' ');

console.log('Все тесты пройдены!');
