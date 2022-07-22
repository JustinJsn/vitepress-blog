const Parent = require("./parent");

function Child() {
  Parent.call(this);
}

const child1 = new Child();
const child2 = new Child();
child1.package.push("paper");

console.log("child1 = ", child1);
console.log("child2 = ", child2);
