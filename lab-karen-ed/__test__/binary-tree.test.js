'use strict'

const BinaryTree = require('../lib/binary-tree')
const TreeNode = require('../lib/treeNode')
require('jest');

describe('Binary-tree Module', function() {
  describe('#Create object', function() {
    let binaryTree = new BinaryTree()
    it('should return an empty object', function() {
      expect(binaryTree).toBeInstanceOf(BinaryTree)
    })
  })
  describe('#Insert', function() {
    let one = new TreeNode(1)
    let binaryTree = new BinaryTree()
    binaryTree.root = one
    it('should return the root of the tree', function() {
      expect(binaryTree.root).toEqual({'left': null, 'right': null, 'value': 1})
    })
  })
})
