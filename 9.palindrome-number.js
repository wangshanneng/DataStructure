/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Solution 1：从后往前遍历
  let str = x + "";
  let newStr = "";
  for (let len = str.length, i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;

  // Solution 2: JS-API 实现
  // return x.toString() === x.toString().split("").reverse().join("");
};
// @lc code=end
