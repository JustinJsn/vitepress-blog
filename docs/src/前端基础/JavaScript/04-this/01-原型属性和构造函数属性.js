class Foo {}

Foo.name = "foo";
Foo.prototype.name = "bar";

const foo = new Foo();
console.log(foo.name); // ✨ bar
