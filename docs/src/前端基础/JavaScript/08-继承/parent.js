function Parent() {
  this.name = "Rachel";
  this.package = ["key", "picture"];
}

Parent.prototype.sayName = function () {
  console.log("I am " + this.name + "!");
};

module.exports = Parent;
