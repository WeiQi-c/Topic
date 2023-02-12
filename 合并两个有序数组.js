/**
 * 两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 输出: [1,2,2,3,5,6]
 */
function mergeArrs(nums1, nums2) {
  let len1 = nums1.length - 1,
    len2 = nums2.length - 1,
    len = nums1.length + nums2.length - 1
  while (len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  return nums1
}

console.log(mergeArrs([1,3,4,5], [2,6,7]))