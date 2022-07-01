class LNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = new LNode();
    this.length = 0;
  }

  insert(x, y) {
    let p = this.head;
    let q = new LNode(y);
    while (true) {
      if (p.next && p.next.element === x) {
        q.next = p.next;
        p.next = q;
        this.length++;
        break;
      }
      if (!p.next) {
        p.next = q;
        this.length++;
        break;
      }
      p = p.next;
    }
  }

  delete(x) {
    let p = this.head;
    while (true) {
      if (p.next && p.next.element === x) {
        if (p.next.next) {
          const q = p.next.next;
          p.next = q;
          this.length--;
          break;
        } else {
          p.next = null;
          this.length--;
          break;
        }
      }
      p = p.next;
    }
  }

  print() {
    const result = [];
    let p = this.head.next;
    while (true) {
      if (p) {
        result.push(p.element);
        p = p.next;
      }
      if (!p) break;
    }
    return result;
  }
}

const list = new List();
list.insert(0, 1);
list.insert(1, 2);
console.log(list);
console.log(list.print());
