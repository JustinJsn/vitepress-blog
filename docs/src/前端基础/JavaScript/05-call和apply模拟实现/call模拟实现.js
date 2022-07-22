const { foo, obj } = require("./example");
console.log(foo(1, 2));
console.log(foo.call(obj, 1, 2));

Function.prototype.call2 = function (context) {
  context = context || global || window;
  context.fn = this;

  let arr = [];
  for (var i = 1; i < arguments.length; i++) {
    arr.push("arguments[" + i + "]");
  }

  result = eval("context.fn(" + arr + ")");
  delete context.fn;
  return result;
};

console.log("call2 => ", foo.call2(obj, 1, 2));
