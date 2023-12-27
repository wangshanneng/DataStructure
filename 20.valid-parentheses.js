/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let obj = {
      '{':'}',
      '(':')',
      '[':']'
    }
    for (let i= 0; i < s.length; i++) {
      const item = s[i]
      // 左括号
      if (item in obj) {
        stack.push(item)
      }else {
        if (item != obj[stack.pop()]) {
          return false
        }
      }
    }
    // 栈非空则返回fase   因为有 {{{ 情况
    return !stack.length
};
// @lc code=end

