/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      if (pairs[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end

/**
 * 解题思路：【栈】当遇到一个左括号，对应的右括号进栈，当遇到一个右括号，弹出栈顶元素比较是否相等。
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

