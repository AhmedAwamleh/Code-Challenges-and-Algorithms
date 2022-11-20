
// Write your test here
const { BinaryTree } = require('./challenge03');

describe('Binary Tree', () => {
  it('Testing sortedArrayToBST', () => {
    let tree = new BinaryTree();
    let array = [-10, -3, 0, 5, 9];
    let result = { "left": { "left": { "left": null, "right": null, "root": -10 }, "right": null, "root": -3 }, "right": { "left": { "left": null, "right": null, "root": 5 }, "right": null, "root": 9 }, "root": 0 };
    expect(tree.sortedArrayToBST(array)).toEqual(result);
  })
});
