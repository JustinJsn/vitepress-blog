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
   * 获取操作
   * @param {number} i 第 i 个位置
   */
  getElement(i) {
    // 获取第一个结点
    let p = this.head.next;
    // 从 1 开始往后遍历，查找第 i 个位置的元素
    let j = 1;
    while (p && j < i) {
      p = p.next;
      j++;
    }
    // 遍历完之后，如果 p 为 null 表示没有找到第 i 个位置的元素
    if (!p || j > i) {
      throw new Error(`未查找到第 ${i} 个位置上的元素`)
    }
    return p.element;
  }
}

// ********** 初始化链表 **************
const list = new List();
list.head.next = new Node("我是第一个数据元素");
list.length++;

list.head.next.next = new Node("我是第二个数据元素");
list.length++;
console.log(list)
// ********** 初始化链表 **************

console.log("获取操作:", list.getElement(2));
