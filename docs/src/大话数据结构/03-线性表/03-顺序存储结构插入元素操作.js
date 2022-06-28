/**
 * 线性表插入操作
 * @param {Array} list 线性表
 * @param {Number} index 将 e 元素插入到第 index 个位置中
 * @param {Number | String} e 插入的元素
 */
function listInsert(list, index, e) {
  if (index < 1 || index > list.length + 1) {
    throw new Error('元素插入位置有问题')
  }
  if (index <= list.length + 1) {
    for (let j = list.length - 1; j >= index - 1; j--) {
      list[j + 1] = list[j];
    }
    list[index - 1] = e;
  }
}

const list = [1, 2, 3, 4];
listInsert(list, 1, 56);

console.log(list); // [ 56, 1, 2, 3, 4 ]
