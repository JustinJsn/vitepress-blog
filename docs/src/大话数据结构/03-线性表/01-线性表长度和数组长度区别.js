// 存储空间初始分配量
const arr = new Array(10);

let value = arr.values();
// 线性表当前长度
let len = 0;

// 赋值
arr[0] = 1;
arr[1] = 2;

while (value.next().value && !value.next().done) {
  len++;
}

console.log("线性表长度: ", len); // 线性表长度: 2
console.log("数组长度: ", arr.length); // 数组长度: 10
