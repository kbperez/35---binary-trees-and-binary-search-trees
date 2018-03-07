'use strict'

const BST = require('../lib/binary-search-tree')
const TreeNode = require('../lib/treeNode')
require ('jest');

describe('Binary-search-tree Module', function() {
  describe('#Create object', function() {
    let bst = new BST()
    it('should return an empty object', function() {
      expect(bst).toBeInstanceOf(BST)
    })
  })
  describe('#Insert', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    it('should return the root of the tree', function() {
      expect(bst.root).toEqual({'left': null, 'right': null, 'value': 5})
    })
  })
  describe('#IsBalanced', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    it('should return as a balanced tree', function() {
      expect(bst.isBalanced()).toEqual('balanced')
    })
  })
  describe('#IsBalanced', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    bst.insert(new TreeNode(20))
    bst.insert(new TreeNode(26))
    it('should return as an unbalanced tree', function() {
      expect(bst.isBalanced()).toEqual('unbalanced')
    })
  })
  describe('#Find', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    it('should traverse tree and stop when it finds 8', function() {
      expect(bst.find(8)).toEqual({'left': null, 'right': {'left': null, 'right': null, 'value': 16}, 'value': 8})
    })
  })
  describe('#Find', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))
    bst.insert(new TreeNode(2))
    bst.insert(new TreeNode(8))
    bst.insert(new TreeNode(16))
    it('should traverse tree and return null if node not found', function() {
      expect(bst.find(100)).toEqual(null)
    })
  })
  describe('#Remove', function() {
    let bst = new BST()
    bst.insert(new TreeNode(5))

    it('should traverse tree and remove a node if found', function() {
      expect(bst.remove(16)).toEqual(null)
    })
  })
  describe('#Invalid arguments', function() {
    let bst = new BST()
    it('should return null if no find value passed', function() {
      expect(bst.find()).toEqual(null)
    })
    it('should return null if tree has no root', function() {
      expect(bst.isBalanced()).toEqual(null)
    })
  })
})
