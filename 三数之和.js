/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    let res = []
    // forEach 不能 break，函数式本身是 total 的 
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let c = map.get(target - n)
        if (c !== undefined) {
            res.push(c, i)
        }
        map.set(n, i)
    }

    return res
};
