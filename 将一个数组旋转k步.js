/**
 * [1,2,3,4,5,6,7]
 * 
 * 旋转 3 步
 * 
 * 得到[5,6,7,1,2,3,4]
 */

function rotateArr(arr, k) {
  if (!k || !arr.length) return arr
  k = Math.abs(k % arr.length) // 取绝对值

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }
  return arr
}

function rotateArr1(arr, k) {
  if (!k || !arr.length) return arr
  k = Math.abs(k % arr.length) // 取绝对值

  // arr.splice(arr.length - k)
  return [...arr.splice(-k), ...arr]
}

console.log(rotateArr1([1,2,3,4,5,6,7], 3))