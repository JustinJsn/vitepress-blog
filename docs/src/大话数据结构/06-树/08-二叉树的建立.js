class BiTNode {
  constructor(data) {
    this.data = data;
    this.lChild = undefined;
    this.rChild = undefined;
  }
}

let index = 0;
function createTree(str,  tree = new BiTNode()) {
  const ch = str[index++];

  if (ch === '#') {
    tree.data = null;
  } else {
    if (!tree) {
      return;
    }

    tree.data = ch;
    tree.lChild = createTree(str, new BiTNode(tree.lChild));
    tree.rChild = createTree(str, new BiTNode(tree.rChild));
  }

  return tree;
}

const tree = createTree('ABDH#K###E##CFI###G#J##');

module.exports = tree;
