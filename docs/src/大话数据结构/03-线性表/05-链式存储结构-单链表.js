/**
 * 链式结构-结点
 */
class Node {
  constructor(element) {
    this.element = element; // 数据元素
    this.next = null; // 后继结点存储地址
  }
}

/**
 * 单链表
 */
class List {
  constructor() {
    this.head = new Node(); // 头结点
    this.length = 0; // 链表长度
  }
}
