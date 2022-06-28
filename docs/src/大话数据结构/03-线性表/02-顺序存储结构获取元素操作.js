const ERROR = 0;

/**
 * 线性表 - 获取元素操作
 * @param {Arrau} list 线性表
 * @param {Number} index 获取的第 index 位元素
 * @description 时间复杂度为 O(1)
 */
export function getElement(list, index) {
  if (index < 1 || index > list.length || list.length === 0) {
    return ERROR;
  }

  return list[index - 1];
}
