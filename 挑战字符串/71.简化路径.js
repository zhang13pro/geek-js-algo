/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
// Split commands with /    Use a stack to apply commands
var simplifyPath = function (path) {
  const stack = []
  path = path.split("/")

  for (let i = 0; i < path.length; i++) {
    if (path[i] == "." || path[i] == "") continue
    if (path[i] == "..") stack.pop()
    else stack.push(path[i])
  }

  return "/" + stack.join("/")
}
// @lc code=end
simplifyPath("/a/./b/../../c/")
