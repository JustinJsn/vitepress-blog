/**
 *
 * @param {String} s
 * @param {Number} numRows
 */
function convert(s, numRows) {
  const arr = [];
  let flag = -1;
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    arr[index] = arr[index] ? `${arr[index]}${s.charAt(i)}` : s.charAt(i);

    if (index === 0 || index === numRows - 1) {
      flag = -flag;
    }

    index += flag;
  }

  return arr.join("");
}

console.log(convert("PAYPALISHIRING", 4));
