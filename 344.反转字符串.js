/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
  return s;
};
// @lc code=end

/**
 * 解题思路: 【双指针 + 二分法】使用双指针，一个指向字符串开头，一个指向末尾。在每一步迭代中，交换两指针所指字符，然后向中间移动。最终完成字符串反转
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */


