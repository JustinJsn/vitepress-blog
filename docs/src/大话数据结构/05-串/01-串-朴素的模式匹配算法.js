function index(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j >= str2.length) {
    return i - str2.length;
  } else {
    return null;
  }
}

console.log(index("abc", "c"))
