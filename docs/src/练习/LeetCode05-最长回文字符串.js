/**
 *
 * @param {String} s
 */
function longestPalindrome(s) {
  const len = s.length;
  if (len < 2) return s;

  let maxLen = 1;
  let begin = 0;

  // 动态规划初始化边界条件
  // * 边界条件01: 只有一个字符时本身就是回文串
  const dp = new Array(len);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len);
  }

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  const charArray = s.split("");
  // ! 外层枚举子串长度
  for (let L = 2; L <= len; L++) {
    // ! 内层枚举左边界
    for (let i = 0; i < len; i++) {
      // ? 由子串长度和左边界可以确定右边界，j-i+1=L 即 j=L+i-1
      let j = L + i - 1;
      if (j >= len) break;

      if (charArray[i] !== charArray[j]) {
        dp[i][j] = false;
      } else {
        // * 边界条件02: 当有两个字符时，只有两个字符相同才是回文串
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          // * 状态方程：P(i, j) = P(i + 1, j - 1) && S_i === S_j
          // ? 回文串：去掉头尾任然还是回文串
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
}

console.log(longestPalindrome("aa"));
