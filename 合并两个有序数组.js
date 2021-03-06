function mergeArrs (nums1, m, nums2, n) {
  let len1 = m - 1,
      len2 = n - 1,
      len = m + n - 1
  while (len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  return nums1
}

console.log(mergeArrs([1,3,4,5], 4, [2,6,7], 3))