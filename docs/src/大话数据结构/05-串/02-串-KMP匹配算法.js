
/**
 * 获取 next 前缀表
 * @param {String} subStr 模式串
 */
function getNext(subStr) {
  // 初始化
  let i = 1;
  let j = 0;
  const next = [];
  next[0] = 0;

  while (i < subStr.length) {
    while (j > 0 && subStr[i] !== subStr[j]) {
      j = next[j - 1];
    }
    if (subStr[i] === subStr[j]) {
      j++;
    }

    // 最后更新状态
    next[i] = j;
    i++;
    // console.log("i = ", i);
    // console.log("j = ", j);
  }

  // for (let i = 1; i < subStr.length; i++) {
  //   // 不相等情况，j 回退
  //   while (subStr[i] !== subStr[j] && j > 0) {
  //     j = next[j - 1];
  //   }
  //   // 相等 j 向前移动
  //   if (subStr[i] === subStr[j]) {
  //     j++;
  //   }
  //   // 更新 next
  //   next[i] = j;
  // }

  return next;
}

// console.log(getNext("ababcabaa"))

function index_KMP(str, subStr) {
  let i = 0;
  let j = 0;
  const next = getNext(subStr);
  console.log(next)

  while (i < str.length && j < subStr.length) {
    if (str[i] === subStr[j]) {
      i++;
      j++;
    } else if (j === 0 && subStr[j] !== str[i]) {
      i++;
      j = 0;
    } else {
      j = next[j - 1];
    }
  }

  if (j >= subStr.length) {
    return i - subStr.length;
  }

  throw new Error('未匹配到');
}


console.log(index_KMP("ababaaaba", "aaa"))


var strStr = function(haystack, needle) {
  const n = haystack.length, m = needle.length;
  if (m === 0) {
      return 0;
  }
  const pi = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
      while (j > 0 && needle[i] !== needle[j]) {
          j = pi[j - 1];
      }
      if (needle[i] == needle[j]) {
          j++;
      }
      pi[i] = j;
  }
  console.log(pi)
  for (let i = 0, j = 0; i < n; i++) {
      while (j > 0 && haystack[i] != needle[j]) {
          j = pi[j - 1];
      }
      if (haystack[i] == needle[j]) {
          j++;
      }
      if (j === m) {
          return i - m + 1;
      }
  }
  return -1;
};

console.log(strStr("abaabaaf", "baa"))
