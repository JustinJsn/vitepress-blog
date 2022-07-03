function fib(i) {
  if (i < 2) {
    return i === 0 ? 0 : 1;
  }

  return fib(i - 1) + fib(i - 2);
}

console.log(fib(12));
