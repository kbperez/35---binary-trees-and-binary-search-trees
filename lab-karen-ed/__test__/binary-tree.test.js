'use strict'

const TreeNode = require('../lib/binary-tree')

describe('Binary-tree Module', function() {
  describe('#Create objects', function() {
    let treeNode = new TreeNode()
    it('should return an empty object', function() {
      expect(treeNode).toBeInstanceOf(TreeNode)
    })
  })
})