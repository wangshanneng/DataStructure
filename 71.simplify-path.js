/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let paths = path.split("/");
  for (let index = 0; index < paths.length; index++) {
    const element = paths[index];
    if (element === "..") {
      stack.pop();
    } else if (element && element !== ".") {
      stack.push(element);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
