class DoubleStack {
  constructor(MAX_SIZE) {
    this.data = new Array(MAX_SIZE);
    this.top1 = -1;
    this.top2 = MAX_SIZE;
  }

  push(number, item) {
    if (this.top2 === this.top1 + 1) {
      throw new Error("溢出");
    }
    if (number === 1) {
      this.data[++this.top1] = item;
      return true;
    }
    if (number === 2) {
      this.data[--this.top2] = item;
      return true;
    }
  }

  pop(number) {
    if (number === 1) {
      if (this.top1 === -1) {
        throw new Error("栈 1 为空栈")
      }
      this.data[this.top1--] = undefined;
      return true;
    }
    if (number === 2) {
      if (this.top2 === this.data.length) {
        throw new Error("栈 2 为空栈");
      }
      this.data[this.top2++] = undefined;
      return true;
    }
  }
}
