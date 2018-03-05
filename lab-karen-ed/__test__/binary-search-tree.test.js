'use strict'

const BST = require('../lib/binary-search-tree')
const TreeNode = require('../lib/treeNode')

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
})
