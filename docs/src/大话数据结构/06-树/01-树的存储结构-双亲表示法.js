class PTNode {
  constructor(data, parent) {
    /** 数据域：结点元素 */
    this.data = data; // 元素
    /** 指针域：双亲结点在数组中的位置 */
    this.parent = parent; // 双亲结点在数组中的位置
  }
}

class PTree {
  constructor() {
    /** 根结点的位置 */
    this.rootPos = 0;
    /** 结点数 */
    this.nodeCount = 0;
  }
}
