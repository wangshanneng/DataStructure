/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

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
