let global = "global";

function foo() {
  console.log(global);
}

function bar() {
  let global = "bar";
  foo();
}

bar(); // ✨global
