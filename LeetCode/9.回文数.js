/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 方法一: 从后往前遍历
  let str = x + "";
  let newStr = "";
  for (let len = str.length, i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;

  //  方法二: JS-API 实现
  // return x.toString() === x.toString().split("").reverse().join("");
};
// @lc code=end

/**
 * 解题思路：【遍历】从后往前拼接字符串，然后比较是否相等
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */