var obj = {
  val: "obj",
};

global.val = "global";

function foo(a, b) {
  console.log("形参 a = ", a);
  console.log("形参 b = ", b);
  return this.val;
}

module.exports = {
  foo,
  obj,
};
