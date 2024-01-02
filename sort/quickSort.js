/**
 * 快速排序
 * 一种基于分治策略的排序算法
 * 算法核心操作是「哨兵划分」,其目标是：选择数组中的某个元素作为“基准数”，将所有小于基准数的元素移到其左侧，而大于基准数的元素移到其右侧。
 */

let arr = [123, 234, 53, 64, 64, 335, 765, 343];

// 快速排序
function quickSort(arr) {
  // 递归推出条件
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(arr));