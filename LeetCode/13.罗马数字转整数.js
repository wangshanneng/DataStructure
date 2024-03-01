/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let ret = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = map.get(s[i]);
        if (i < n - 1 && value < map.get(s[i + 1])) {
            ret -= value;
        } else {
            ret += value;
        }
    }
    return ret;
};
// @lc code=end

