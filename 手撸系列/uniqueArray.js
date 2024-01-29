/**
 * 数组去重
 */

// 1. 方法一: Array.from + new Set / 解构赋值 + new Set
function uniqueArray1(arr) {
  return Array.from(new Set(arr)); // 或者 [...new Set(arr)]
}

// 2. 方法二: for + indexOf
function uniqueArray2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 3. 方法三: reduce + indexOf
function uniqueArray3(arr) {
  return arr.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

// 4. 方法四: forEach + includes
function uniqueArray4(arr) {
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

// 5. 方法五: filter + indexOf
function uniqueArray5(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// 6. 方法六: Object/new Map + forEach
function uniqueArray6(arr) {
  const newArr = [];
  const obj = {};

  arr.forEach((item) => {
    if (!obj[item]) {
      newArr.push(item);
      obj[item] = true;
    }
  });

  return newArr;
}

// ---测试---
let arr = [1, 1, 2, 3, 4, 5, 5];
console.log(uniqueArray1(arr));
console.log(uniqueArray2(arr));
console.log(uniqueArray3(arr));
console.log(uniqueArray4(arr));
console.log(uniqueArray5(arr));
console.log(uniqueArray6(arr));
