// 字符串反转

// 方法一: split + reverse + join
function reverseString1(str) {
  return str.split("").reverse().join(""); // 或者 [...str].reverse().join('') 或者 Array.from(str).reverse().join('')
}

// 方法二: 递归
function reverseString2(str) {
  if (str.length === 0) {
    return str;
  }
  return reverseString2(str.substr(1)) + str[0];
}

// 方法三: 循环遍历
function reverseString3(str) {
  let ret = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }
  return ret;
}

// ---测试---
let str = "hello world";
console.log(reverseString1(str));
console.log(reverseString2(str));
console.log(reverseString3(str));
