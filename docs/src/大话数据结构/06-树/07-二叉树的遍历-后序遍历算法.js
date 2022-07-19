const tree = require('./08-二叉树的建立');

function PostOrderTraverse(tree) {
  if (!tree || !tree.data) return;

  PostOrderTraverse(tree.lChild);
  PostOrderTraverse(tree.rChild);
  console.log(tree.data);
}

PostOrderTraverse(tree); // KHDEBIFJGCA
