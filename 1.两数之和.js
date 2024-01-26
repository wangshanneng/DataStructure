/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needTarget = target - nums[i]
    if (map.has(needTarget)) {
      return [map.get(needTarget), i]
    }
    map.set(nums[i], i);
  }
};
// @lc code=end

/**
 *
 * 解题思路：【暴力解法】双重循环，遍历数组，两两比较，直到找到两个数之和等于目标值
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)，只用到了常数级的额外空间
 */
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * 解题思路：【哈希表】
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var twoSum2 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needTarget = target - nums[i]
    if (map.has(needTarget)) {
      return [map.get(needTarget), i]
    }
    map.set(nums[i], i);
  }
};
