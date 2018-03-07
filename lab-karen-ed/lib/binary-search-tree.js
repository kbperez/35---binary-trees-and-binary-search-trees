'use strict';

class BST {
  constructor(root=null) {
    this.root = root;
  }
  //function to insert a node
  insert(nodeToInsert) {
    if(this.root === null)
      this.root = nodeToInsert;
    else
      this._insert(this.root,nodeToInsert);
  }

  _insert(root,nodeToInsert) {
    if(nodeToInsert.value < root.value) {
      // Vinicio - going left
      if(!root.left)
        root.left = nodeToInsert;
      else
        this._insert(root.left,nodeToInsert);
    } else {
      // Vinicio - going right
      if(!root.right)
        root.right = nodeToInsert;
      else
        this._insert(root.right,nodeToInsert);
    }
  }
  //function to find a value
  find(value) {
    return this._find(this.root,value);

  }

  _find(root,value) {
    if(!root)
      return null;
    else if(root.value === value)
      return root;
    else if(root.value < value)
      return this._find(root.right,value);
    else
      return this._find(root.left,value);
  }
  //helper to find the min height
  minDepth(root) {
    if(root === null) return null;
    return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right));
  }
  //helper to find the max height
  maxDepth(root) {
    if(root === null) return null;
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }
  //determine if a tree is balanced
  isBalanced() {
    if(!this.root) return null;
    return this.maxDepth(this.root) - this.minDepth(this.root) < 2 ? 'balanced' : 'unbalanced';
  }

  //helper function to find a parent nodeToInsert
  findParent(val) {
    return this._findParent(this.root, val);
  }

  _findParent(root, val) {
    if (!root) {
      return null;

    } else if (root.value === val) {
      this.parent = root;
      console.log('val', root.value, this.parent);
      return this.parent;

    } else if(root.value < val) {
      this.parent = root;
      console.log('root right', this.parent);
      return this._findParent(root.right, val);

    } else {
      this.parent = root;
      console.log('root left', this.parent);
      return this._findParent(root.left, val);
    }
  }

  //helper function to determine which node to remove if there are two children
  chooseNode(node) {
    return this._chooseNode(node);
  }

  _chooseNode(root) {
    if(root.right === null) {
      return root;
    } else if (root.right === null && root.left === null) {
      return root;

    } else if (root.right !== null) {
      return this._chooseParent(root.right);

    } else {
      return this._chooseParent(root.left);
    }
  }

  //remove function
  remove(value) {
    let parent = this._findParent(value);
    this._remove(value, parent);
    return 'done';
  }

  _remove(value, parent) {
    let current;
    let direction;

    //find node to remove and set direction
    if(parent.right.value === value) {
      current = parent.right;
      direction = 'right';

    } else {
      current = parent.left;
      direction = 'left';
    }
    //remove nodes without children
    if (current.right === null && current.left === null) {
      if (parent.right.value === value) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    }

    //remove node with one child
    if(current.right === null) {
      if (current.left !== null) {
        parent[direction] = current.left;
      }
    }

    if(current.leftt === null) {
      if (current.right !== null) {
        parent[direction] = current.right;
      }
    }
    //
    if (current.right !== null && current.left !== null) {
      let newNode = this.chooseParent(current.left);
      this.remove(newNode.value);
      current.value = newNode.value;
    }
  }
}


module.exports = BST
