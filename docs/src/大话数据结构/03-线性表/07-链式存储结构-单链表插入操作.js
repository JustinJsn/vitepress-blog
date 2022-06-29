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

  /**
   * 插入操作
   * @param {unknown} e 插入元素
   * @param {number} i 插入位置
   */
  insertElement(e, i) {
    let j = 1;
    let p = this.head;

    while (p && j < i) {
      p = p.next;
      j++;
    }
    if (!p || j > i) {
      throw new Error("未查找到目标元素");
    }
    const node = new Node(e);
    node.next = p.next;
    p.next = node;
    this.length++;
  }
}

// ********** 初始化链表 **************
const list = new List();
list.head.next = new Node("我是第一个数据元素");
list.length++;

list.head.next.next = new Node("我是第二个数据元素");
list.length++;
// ********** 初始化链表 **************

list.insertElement("我是插入的元素", 2);

console.log(list.head.next.next); // 插入的元素
