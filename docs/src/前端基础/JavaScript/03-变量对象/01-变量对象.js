console.log(foo("gg")); // ✨gg

function foo(a) {
  console.log(a); // ✨undefined
  var a = "foo";
}

var foo = 1;
