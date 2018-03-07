'use strict';

const TreeNode = require('./treeNode')

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  inOrderTraversal() {
    if(!this.root)
      return null;
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(root) {
    //this is a base case
    if(root === null)
      return null;

    // visit left
    this._inOrderTraversal(root.left);
    // visit root
    console.log(`Visiting ${root.value}`);
    // visit right
    this._inOrderTraversal(root.right);
  }


  preOrderTraversal() {
    if(!this.root)
      return null;
    this._preOrderTraversal(this.root);
  }

  _preOrderTraversal(root) {
    // this is a base case
    if(root === null)
      return null;

    // visit root
    console.log(`Visiting ${root.value}`);
    // visit left
    this._preOrderTraversal(root.left);
    // visit right
    this._preOrderTraversal(root.right);
  }

  postOrderTraversal() {
    if(!this.root)
      return null;
    this._postOrderTraversal(this.root);
  }

  _postOrderTraversal(root) {
    // this is a base case
    if(root === null)
      return null;

    // visit left
    this._postOrderTraversal(root.left);
    // visit right
    this._postOrderTraversal(root.right);
    // visit root
    console.log(`Visiting ${root.value}`);
  }
}

module.exports = BinaryTree
