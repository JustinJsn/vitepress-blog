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
   * 删除操作
   * @param {number} i 删除元素的位置
   */
  deleteElement(i) {
    let j = 1;
    let p = this.head;
    while (p && j < i) {
      p = p.next;
      j++;
    }
    if (!p || j > i) {
      throw new Error("未找到目标元素");
    }
    let q = p.next;
    p.next = q.next;
    console.log('删除的元素为：', q.element);
    q = null;
  }
}

// ********** 初始化链表 **************
const list = new List();
list.head.next = new Node("我是第一个数据元素");
list.length++;

list.head.next.next = new Node("我是第二个数据元素");
list.length++;

list.head.next.next.next = new Node("我是第三个数据元素");
list.length++;
// ********** 初始化链表 **************

list.deleteElement(1);
