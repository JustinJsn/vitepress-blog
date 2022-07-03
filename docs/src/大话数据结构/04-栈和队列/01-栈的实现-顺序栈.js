class Stack {
  constructor() {
    this.data = [];
  }

  /**
   * 进栈
   * @param {Any} item 数据元素
   */
  push(item) {
    this.data.push(item);
  }

  /**
   * 出栈
   */
  pop() {
    return this.data.pop();
  }
}
