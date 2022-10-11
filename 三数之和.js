/**
 * 一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 */

const threeSum = function (nums) {
  let map = new Map()
  let result = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 第一个数
    let first = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      // 第三个数
      let second = 0 - nums[j] - first
      if (map.has(second)) {
        result.push([first, second, nums[j]])
      }
      map.set(nums[j], j)
    }
    map.clear()
  }
  return result
};

// 测试
var nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
// [[-1,0,1],[-1,2,-1],[0,1,-1]]
// 存在重复元组
