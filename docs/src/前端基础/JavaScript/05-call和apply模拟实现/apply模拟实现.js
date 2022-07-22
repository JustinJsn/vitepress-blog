const { foo, obj } = require("./example");

console.log(foo(1, 2));
console.log(foo.apply(obj, [1, 2]));

Function.prototype.apply2 = function (context, args) {
  context = context || global || window;
  context.fn = this;

  var result;
  var arr = [];
  if (!args) {
    result = context.fn();
  } else {
    for (var i = 0; i < args.length; i++) {
      arr.push("args[" + i + "]");
    }
    result = eval("context.fn(" + arr + ")");
  }

  delete context.fn;
  return result;
};

console.log("模拟 => ", foo.apply2(obj, [1, 2]));
