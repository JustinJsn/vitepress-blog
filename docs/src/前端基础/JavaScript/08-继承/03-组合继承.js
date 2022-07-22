const Parent = require("./parent");

function Child() {
  Parent.call(this);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

const child1 = new Child();
const child2 = new Child();
child1.sayName();
child1.package.push("paper");
console.log("child1 = ", child1.package);
console.log("child2 = ", child2.package);
