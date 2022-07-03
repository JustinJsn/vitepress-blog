class StackNode {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  /**
   * 进栈
   */
  push(item) {
    const stackNode = new StackNode(item);
    if (!this.top) {
      this.top = stackNode;
      this.length++;
      return true;
    }
    stackNode.next = this.top;
    this.top = stackNode;
    this.length++;
    return true;
  }
  /** 出栈 */
  pop() {
    if (!this.isEmpty()) return false;
    const popItem = this.top.el;
    this.top = this.top.next;
    return popItem;
  }

  print() {
    let p = this.top;
    const result = [];
    while (p) {
      result.unshift(p.el);
      p = p.next;
    }

    return result;
  }

  isEmpty() {
    return !!this.length;
  }
}

const instance = new LinkStack();
instance.push("测试0")
instance.push("测试1")
console.log(instance.pop());
console.log(instance.print())
