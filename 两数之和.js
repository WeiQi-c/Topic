// 整数数组 nums  目标值 target
// 找出该数组中 和为目标值的两个整数

function sum (nums, target) {
  let myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const k = target - nums[i]
    if (myMap.has(k)) {
      return [myMap.get(k), i]
    } else {
      myMap.set(nums[i], i)
    }
  }
  return []
}

console.log(sum([1,3,5,7], 10))