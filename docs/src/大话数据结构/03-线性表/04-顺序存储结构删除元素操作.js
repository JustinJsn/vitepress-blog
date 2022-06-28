/**
 * 线性表删除操作
 * @param {Array} list 线性表
 * @param {Number} index 在线性表中的删除第 index 位元素
 * @param {Number | String} e 删除的元素
 */
function listDelete(list, index) {
  if (index < 1 || index > list.length) throw new Error('删除位置有误')
  // 删除的元素
  const e = list[index - 1];
  for (let i = index; i >= index && i < list.length; i++) {
    list[i - 1] = list[i];
  }
  list.length--;
  return e;
}

const list = [1, 2, 3, 4, 5, 6];

const e = listDelete(list, 2);

console.log('删除的元素为: ', e); // 删除的元素为:  2
console.log('删除后的线性表: ', list); // 删除后的线性表:  [ 1, 3, 4, 5, 6 ]
