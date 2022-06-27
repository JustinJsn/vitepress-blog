/**
 *
 * @param {Array<number | string>} listA
 * @param {Array<number | string>} listB
 * @returns {Array<number | string> | undefined}
 */
export default function unionList(listA, listB) {
  if (!(listA instanceof Array) || !(listB instanceof Array)) {
    console.log("请输入数组类型的参数");
    return;
  }
  const e = [];
  const listBLength = listB.length;

  // 时间复杂度 O(listBLength)
  for (let i = 0; i < listBLength; i++) {
    const target = listB[i];
    if (!listA.includes(target)) {
      e.push(target);
    }
  }

  return listA.concat(e);
}

const a = [1, 3, 4, 5, 6, 7, 8];
const b = [1, 2, 3, 5, 10, 9, 15];

const result = unionList(a, b);
console.log(result);
