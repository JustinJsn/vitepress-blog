const tree = require('./08-二叉树的建立');

function PreOrderTraverse(tree) {
  if (!tree || !tree.data) return;

  console.log(tree.data);
  PreOrderTraverse(tree.lChild);
  PreOrderTraverse(tree.rChild);
}

PreOrderTraverse(tree); // ABDHKECFIGJ
