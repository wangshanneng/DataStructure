/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

/**
 * 解题思路：用 obj 对象存储遍历所需的目标数字及对应的索引。每遍历一个元素，则判断对象中是否存在满足要求的目标数字。若存在则返回，否则继续往下执行直至结束。所有事情在一次遍历中完成（用了空间换取时间）。
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * /

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    const need = target - item;
    if (map.has(item)) {
      return [map.get(item), index];
    }
    map.set(need, index);
  }
};
// @lc code=end

// 解题思路：暴力解法，双循环！
// 时间复杂度：O(n²)
// 空间复杂度：O(1)
var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i != j) {
        return [i, j];
      }
    }
  }
};
