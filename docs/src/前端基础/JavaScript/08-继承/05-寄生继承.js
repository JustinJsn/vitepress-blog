function create(prototype) {
  function F() {}
  F.prototype = prototype;
  const clone = new F();
  clone.sayName = function() {
    console.log(this.name)
  }
  return clone;
}

function Foo() {}
Foo.prototype.name = "Ross";

const obj = create(Foo.prototype);
console.log(obj.name)
obj.sayName();
