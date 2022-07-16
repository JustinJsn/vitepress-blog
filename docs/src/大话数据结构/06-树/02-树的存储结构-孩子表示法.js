class CTNode {
  constructor(data, next) {
    this.child = data;
    this.next = next;
  }
}

class CTBox {
  constructor(data, firstChild, secondChild) {
    this.data = data;
    this.firstChild = new CTNode(firstChild, secondChild);
  }
}
