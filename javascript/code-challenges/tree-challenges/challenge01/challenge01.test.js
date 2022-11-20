// Write your test here

'use strict'

const { Node, newTree } = require('./challenge01');

// let tree = null

// describe('testing the tree', () => {
//   beforeAll(() => {
//     let one = new Node(1)
//     let two = new Node(2)
//     let three = new Node(3)
//     let five = new Node(5)
//     let six = new Node(6)
//     let seven = new Node(7)
//     let eight = new Node(8)

//     one.left = two
//     one.right = three
//     two.left = five
//     two.right = six;
//     three.left = seven
//     three.right = eight
//     tree = new BinaryTree(one)
//   })

//   it('testing preOrder', () => {
//     const expectResult = [1, 2, 5, 6, 3, 7, 8]
//     const orderd = tree.preOrder()
//     expect(orderd).toEqual(expectResult)
//   })
// })



describe('Testing', () => {
  it('it should be null if the tree is empty', () => {
    let inorder = [];
    let preorder = [];
    let tree = newTree(inorder, preorder);
    expect(tree).toEqual(null);
  })

  it('should return the root node of the tree when preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] to be an output: [3,9,20,null,null,15,7]', () => {
    let inorder = [9, 3, 15, 20, 7];
    let preorder = [3, 9, 20, 15, 7];
    let tree = newTree(inorder, preorder);
    expect(tree.value).toEqual(3);
    expect(tree.left.value).toEqual(9);
    expect(tree.right.value).toEqual(20);
    expect(tree.right.left.value).toEqual(15);
    expect(tree.right.right.value).toEqual(7);
  })
  it('It should return the root node of the tree when preorder = [-1], inorder = [-1]', () => {
    let inorder = [-1];
    let preorder = [-1];
    let tree = newTree(inorder, preorder);
    expect(tree.value).toEqual(-1);
  })
});

