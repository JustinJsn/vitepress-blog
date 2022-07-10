function getNext(s) {
  let j = 0;
  const next = [];
  next[0] = 0;

  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1];
    }

    if (s[i] === s[j]) {
      j++;
    }

    next[i] = j;
  }

  return next;
}

function KMP(s, ss) {
  let main = 0;
  let sub = 0
  const next = getNext(ss);
  for (; main < s.length; main++) {
    while (sub > 0 && s[main] !== ss[sub]) {
      sub = next[sub - 1];
    }
    if (s[main] === ss[sub]) {
      sub++;
    }

    if (sub === ss.length) {
      return main - sub + 1;
    }
  }
  return -1;
}

console.log(getNext("baa"));
console.log(KMP("abaabaaf", "baa"))
