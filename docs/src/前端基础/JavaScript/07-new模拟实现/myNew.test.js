const myNew = require("./new模拟实现");

function Foo(name, age) {
  this.name = "Dolores";
  this.age = 18;

  // return {
  //   name,
  //   age,
  //   greeting() {
  //     console.log(`I am ${name}!`);
  //   },
  // };
  // return null;
}

Foo.prototype.greeting = function () {
  console.log(`I am ${this.name}!`);
};

const foo = new Foo("Monica", 32);
console.log(foo.name); // ✨Dolores
console.log(foo.age); // ✨18
foo.greeting(); // ✨I am Dolores!

const fooTest = myNew(Foo, "Ross", 34);
console.log(fooTest.name);
console.log(fooTest.age);
fooTest.greeting();
