class QNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkQueue {
  constructor() {
    this.head = new QNode();
    this.rear = this.head;
    this.length = 0;
  }

  enQueue(item) {
    const newNode = new QNode(item);
    this.rear.next = newNode;
    this.rear = newNode;
    this.length++;
  }

  deQueue() {
    if (this.head.data === this.rear.data) {
      throw new Error("队列为空");
    }
    const newHead = this.head.next.next;
    this.head.next = newHead;
    this.length--;
  }

  print() {
    let p = this.head.next;
    const result = [];
    while (p) {
      result.push(p.data);
      p = p.next;
    }

    console.log('队列 => ', result);
  }
}

const link = new LinkQueue();
console.log("=========== 入队 ===========");
link.enQueue(1);
link.enQueue(2);
link.enQueue(3);
link.print();
console.log("=========== 入队 ===========");
console.log("=========== 出队 ===========");
link.deQueue();
link.print();
console.log("=========== 出队 ===========");
