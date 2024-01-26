/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 0; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// @lc code=end

/**
 * 解题思路：【动态规划】第 x 级台阶的方案数是爬到第 (x-1) 级台阶的方案数和爬到第 (x-2) 级台阶的方案数的和。
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

// 递归处理会超时！
// if (n <= 2) {
//     return n;
// } else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
// }
