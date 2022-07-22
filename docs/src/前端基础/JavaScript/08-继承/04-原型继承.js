function Foo() {}

Foo.prototype.name = "Monica"

const obj = Object.create(Foo.prototype);

console.log(obj.name)

function create(prototype) {
  function F() {}
  F.prototype = prototype;
  return new F();
}

const test = create(Foo.prototype);
console.log(test.name)
