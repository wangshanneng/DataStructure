/**
 * 冒泡排序：通过比较相邻元素并交换它们的位置，逐步将最大元素冒泡到列表末尾。这个过程重复进行，直到整个列表有序。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const randomArray = require("./randomArray")();
let ret = bubbleSort(randomArray);
console.log(ret);
