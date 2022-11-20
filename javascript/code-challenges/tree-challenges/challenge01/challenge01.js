// Write here the code challenge solution

'use strict'

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right

  }
}

// class BinaryTree {
//   constructor(root = null) {
//     this.root = root
//   }
//   // root ==> left ==> right
//   preOrder() {
//     let result = []
//     const traversal = (node) => {
//       result.push(node.value)
//       if (node.left) traversal(node.left)
//       if (node.right) traversal(node.right)
//     }
//     traversal(this.root)
//     return result

//   }
//   // left ==> root ==> right
//   inOrder() {
//     let result = []
//     const traversal = (node) => {
//       if (node.left) traversal(node.left)
//       result.push(node.value)
//       if (node.right) traversal(node.right)
//     }
//     traversal(this.root)
//     return result
//   }
//   // left ==> right ==> root
//   postOrder() {
//     let result = []
//     const traversal = (node) => {
//       if (node.left) traversal(node.left)
//       if (node.right) traversal(node.right)
//       result.push(node.value)
//     }
//     traversal(this.root)
//     return result
//   }
// }
function newTree(inorder, preorder) {
  if (inorder.length === 0 || preorder.length === 0) {
    return null;
  };

  let treeRoot = new Node(preorder[0]);
  let treeIndexRoot = inorder.indexOf(preorder[0]);
  let leftInorder = inorder.slice(0, treeIndexRoot);
  let rightInorder = inorder.slice(treeIndexRoot + 1);
  let leftPreorder = preorder.slice(1, treeIndexRoot + 1);
  let rightPreorder = preorder.slice(treeIndexRoot + 1);
  treeRoot.left = newTree(leftInorder, leftPreorder);
  treeRoot.right = newTree(rightInorder, rightPreorder);
  return treeRoot;
}

module.exports = { Node, newTree }