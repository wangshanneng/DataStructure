/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// @lc code=end


/**
 * 解题思路：【递归】每一项的和都等于前两项的和，其中f(0)=0,f(1) =1
 * 时间复杂度：O(2^n)
 * 空间复杂度：O(n)
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

/**
 * 解题思路：【动态规划】每一项的和都等于前两项的和，其中f(0)=0,f(1) =1
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};