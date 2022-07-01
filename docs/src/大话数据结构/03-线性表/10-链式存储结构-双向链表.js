class DULNode {
  constructor(element) {
    this.element = element;
    this.next = null; // 后继
    this.prior = null; // 前驱
  }
}

class DULLinkedList {
  constructor() {
    // 头结点
    this.head = new DULNode();
    this.length = 0;
  }

  insert(pos, el) {
    const newNode = new DULNode(el);
    if (!this.head.next) {
      newNode.prior = this.head;
      this.head.next = newNode;
      this.length++;
      return true;
    }
    let p = this.head;
    let y = 1;
    while (p && y < pos) {
      p = p.next;
      y++;
    }
    if (!p || y > pos) {
      return false;
    }
    newNode.prior = p;
    newNode.next = p.next;
    p.next = newNode;
    this.length++;
  }

  delete(pos) {
    let y = 1;
    let p = this.head;
    while (p && y < pos) {
      p = p.next;
      y++;
    }
    if (!p || y > pos) return false;

    if (pos === this.length) {
      p.next = null;
      this.length--;
      return true;
    }
    const delTarget = p.next;
    p.next = delTarget.next;
    delTarget.next.prior = p;
    this.length--;
  }

  print() {
    const list = [];
    let p = this.head.next;
    while (p) {
      list.push(p.element);
      p = p.next;
    }
    return list;
  }
}

const doubleList = new DULLinkedList();

doubleList.insert(1, "第一");
doubleList.insert(2, "第二");
doubleList.insert(1, "第三");
doubleList.delete(1);

console.log(doubleList.print());
