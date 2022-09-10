function sum(str1, str2) {
  const arr1 = str1.split(''), arr2 = str2.split('')
  const len1 = arr1.length, len2 = arr2.length
  const maxLen = Math.max(len1, len2)
  let res = []
  let flag = false
  for (let i = 0; i < maxLen; i++) {
    let temp
    let num1 = arr1.pop(), num2 = arr2.pop()
    num1 = num1 ? num1 : 0
    num2 = num2 ? num2 : 0
    if (flag) {
      temp = parseInt(num1) + parseInt(num2) + 1
    } else {
      temp = parseInt(num1) + parseInt(num2)
    }
    if (parseInt(temp / 10) > 0) {
      // 有进位
      res.push(temp % 10)
      flag = true
    } else {
      res.push(temp)
      flag = false
    }
    if (i == maxLen - 1 && flag) {
      res.push(1)
    }
  }
  return res.reverse().join('')
}

function add(a, b) {
  //取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length)
  //用0去补齐长度
  a = a.padStart(maxLength, 0)  //"0009007199254740991"
  b = b.padStart(maxLength, 0)  //"1234567899999999999"
  //定义加法过程中需要用到的变量
  let t = 0
  let f = 0   //"进位"
  let sum = ""
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }
  if (f !== 0) {
    sum = '' + f + sum
  }
  return sum
}

// 验证
console.log(add('987654321111234', '99900334444')) // '987754221445678'