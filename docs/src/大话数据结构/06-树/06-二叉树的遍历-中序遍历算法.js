const tree = require('./08-二叉树的建立');

function InOrderTraverse(tree) {
  if (!tree || !tree.data) return;

  InOrderTraverse(tree.lChild);
  console.log(tree.data);
  InOrderTraverse(tree.rChild);
}

InOrderTraverse(tree); // HKDBEAIFCGJ
