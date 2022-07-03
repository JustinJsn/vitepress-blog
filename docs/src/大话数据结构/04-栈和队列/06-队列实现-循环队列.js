class Queue {
  #MAX_SIZE = 0;
  constructor(MAX_SIZE) {
    /** 队列长度 */
    this.#MAX_SIZE = MAX_SIZE;
    /** 队列 */
    this.data = new Array(MAX_SIZE);
    /** 队头指针 */
    this.front = 0;
    /** 队尾指针 */
    this.rear = 0;
  }

  queueLength() {
    return (this.rear - this.front + this.#MAX_SIZE) % this.#MAX_SIZE;
  }

  enqueue(item) {
    if (((this.rear + 1) % this.#MAX_SIZE) === this.front) {
      throw new Error("队列已满");
    }
    this.data[this.rear] = item;
    this.rear = (this.rear + 1) % this.#MAX_SIZE;
  }

  dequeue() {
    if (this.front === this.rear) {
      throw new Error("队列为空");
    }
    const item = this.data[this.front];
    this.data[this.front] = undefined;
    this.front = (this.front + 1) % this.#MAX_SIZE;
    return item;
  }
}

const queue = new Queue(10);

console.log("=========== 入队 ===========");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log("队列 => ", queue.data);
console.log("队头指针 => ", queue.front);
console.log('队尾指针 => ', queue.rear);
console.log("=========== 入队 ===========");

console.log("=========== 出队 ===========");
queue.dequeue();
console.log("队列 => ", queue.data);
console.log("队头指针 => ", queue.front);
console.log('队尾指针 => ', queue.rear);
console.log("=========== 出队 ===========");
