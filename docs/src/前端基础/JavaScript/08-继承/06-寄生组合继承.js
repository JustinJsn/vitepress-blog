function Parent() {
  this.colors = ["red", "green"];
}
Parent.prototype.name = "Monica";
Parent.prototype.sayName = function() {
  console.log(`Hello!I am ${this.name}`);
}

function Child() {
  // 将两次调用父构造函数优化为一次
  Parent.apply(this);
}

// *************** 核心 *******************
function create(prototype) {
  function F() {}
  F.prototype = prototype;
  return new F();
}

function extend(parent, child) {
  const proto = create(parent.prototype);
  proto.constructor = child;
  child.prototype = proto;
}
// *************** 核心 *******************

extend(Parent, Child);
const child1 = new Child();
child1.sayName();
console.log(child1.colors)
