class CircularNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(position, element) {
    const newNode = new CircularNode(element);
    if (!this.head) {
      this.head = newNode;
      // 指针需要指回自身
      newNode.next = this.head;
      this.tail = this.head;
      this.length++;
      return true;
    }

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      // 插入新结点，需要重新建立环状结构
      this.tail && (this.tail.next = newNode);
      this.length++;
      return true;
    }

    // 尾部 append
    if (position === this.length + 1) {
      newNode.next = this.head;
      this.tail && (this.tail.next = newNode);
      this.tail = newNode;
      this.length++;
      return true;
    }
    if (position > this.length) return false;

    // 遍历 n - 1
    let time = 1;
    let current = this.head;
    while (current && time < position - 1) {
      current = current.next;
      time++;
      if (current.element === this.head.element) break;
    }
    if (!current || time > position) {
      return false;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  delete(position) {
    let p = this.head;
    let y = 1;
    if (this.length === 0) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return true;
    }
    if (position === 1) {
      const p = this.head;
      this.tail && (this.tail.next = p?.next);
      this.head = p.next;
      this.length--;
      return true;
    }
    while (p && y < position - 1) {
      p = p.next;
      y++;
    }
    if (!p || y > position) {
      return false;
    }
    p.next = p.next.next;
    this.length--;
  }

  print() {
    let p = this.head;
    const list = [];
    while (p) {
      list.push(p.element);
      p = p.next;
      if (p?.element === this.head?.element) {
        break;
      }
    }
    return list;
  }
}

const cirList = new CircularLinkedList();
cirList.insert(1, "初始");
cirList.insert(2, "头部更新");
cirList.insert(3, "??更新");
cirList.insert(4, "!!更新");
cirList.insert(4, "%%更新");

console.log(cirList.print());
console.log(cirList.length);
