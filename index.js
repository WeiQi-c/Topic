const maximumSwap = function (num) {
  num = num + ''
  const arr = num.split('')
  const temp = [...arr].sort((a, b) => b - a)
  let flag = -1
  console.log(temp, arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < temp[i]) {
      flag = i
      break
    }
  }
  if (flag < 0) {
    return num
  }
  for (let i = arr.length - 1; i > flag; i--) {
    if (arr[i] === temp[flag]) {
      let tag = arr[i]
      arr[i] = arr[flag]
      arr[flag] = tag
      break
    }
  }
  return parseInt(arr.join(''))
}

console.log(maximumSwap(1124))
