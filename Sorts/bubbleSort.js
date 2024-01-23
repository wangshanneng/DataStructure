let arr = [123, 234, 53, 64, 64, 335, 765, 343];

// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);