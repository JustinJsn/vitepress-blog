var foo = {
  value: "foo",
};

global.value = "global";

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.link = "start";
const bindBar = bar.bind(foo, "Dolores");

const b = new bindBar(18);
console.log(b.link);

Function.prototype.bind2 = function (context) {
  const self = this;
  context = context || global || window;
  const selfArgs = Array.prototype.slice.call(arguments, 1);

  function fNOP() {}

  function fBound() {
    const otherArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fBound ? this : context,
      selfArgs.concat(otherArgs)
    );
  }

  fNOP.prototype = self.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

const bind2Bar = bar.bind2(foo, "John Snow");

const c = new bind2Bar(23);

console.log(c.link);
