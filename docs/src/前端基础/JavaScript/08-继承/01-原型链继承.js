const Parent = require("./parent");
function Child() {}

Child.prototype = new Parent();
const child = new Child();
const child2 = new Child();

console.log(child);
child.sayName();
child.package.push("paper");
console.log("child.package => ", child.package);
console.log("child2 package => ", child2.package);
