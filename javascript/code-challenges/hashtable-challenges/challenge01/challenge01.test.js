// Write your test here
'use strict';

const { Node, Tree, HashTable } = require('./challenge01');

describe('Testing hash table challenge 1', () => {
  it('should return true if Binary search tree', () => {
    let tree = new Tree();
    tree.root = new Node(8);
    tree.root.left = new Node(3);
    tree.root.right = new Node(10);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(4);
    tree.root.right.right = new Node(15);
    let hashTable = new HashTable(200);
    expect(hashTable.checkSum(tree, 4)).toEqual(true);
    expect(hashTable.checkSum(tree, 3)).toBeFalsy();
  });
});