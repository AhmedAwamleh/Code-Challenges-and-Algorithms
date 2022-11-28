// Write your test here

'use strict';

const { HashTable } = require('./challenge02.js');

describe('testing challenge 02', () => {
  test('return the first repeated word', () => {
    let hashTable = new HashTable();
    expect(hashTable.firstRepeatedWord('hello its me. hello its me')).toStrictEqual('hello');
    expect(hashTable.firstRepeatedWord('my name is ahmed')).toStrictEqual('no repetition');
  });
});