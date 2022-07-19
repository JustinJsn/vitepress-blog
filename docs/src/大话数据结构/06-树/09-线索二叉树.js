const LINK = 0; // 指向孩子结点
const THREAD = 1; // 指向前驱/后继

class BiThrNode {
  constructor(data) {
    this.data = data;
    this.lchild = null;
    this.rchild = null;
    this.ltag = undefined;
    this.rtag = undefined;
  }
}

let pre = null;
function inThreading(node) {
  if (node) {
    inThreading(node.lchild);
    if (!node.lchild) {
      node.ltag = THREAD;
      node.lchild = pre;
    }
    if (pre && !pre.rchild) {
      pre.rtag = THREAD;
      pre.rchild = node;
    }
    pre = node;
    inThreading(node.rchild);
  }
}
//创建需要的节点
let root = new BiThrNode('tom');
let node2 = new BiThrNode('jack');
let node3 = new BiThrNode('smith');
let node4 = new BiThrNode('marry');
let node5 = new BiThrNode('king');
let node6 = new BiThrNode('dim');

//二叉树，后面我们要递归创建，现在简单处理，手动创建
root.lchild = node2;
root.rchild = node3;
node2.lchild = node4;
node2.rchild = node5;
node3.lchild = node6;

inThreading(root);
// console.log(root)

function inOrderTraverse_thread(node) {
  let list = [];
  while (node !== null) {
    while (node.ltag !== 1) {
      node = node.lchild;
    }
    list.push(node);

    while (node.rtag === 1) {
      node = node.rchild;
      list.push(node);
    }

    node = node.rchild;
  }

  return list;
}

console.log(inOrderTraverse_thread(root));
