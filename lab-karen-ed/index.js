const BST = require('./lib/binary-search-tree');
const TreeNode = require('./lib/treeNode');

let bst = new BST();
bst.insert(new TreeNode(5));
bst.insert(new TreeNode(6));

console.log(bst);
console.log(bst.root.value);
console.log(bst.remove(6));
