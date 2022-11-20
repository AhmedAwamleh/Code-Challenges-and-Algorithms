// Write here the code challenge solution
'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  sortedArrayToBST(nums) {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new BinaryTree(nums[mid]);
    root.left = this.sortedArrayToBST(nums.slice(0, mid));
    root.right = this.sortedArrayToBST(nums.slice(mid + 1));

    return root;
  }

}

module.exports = { Node, BinaryTree };