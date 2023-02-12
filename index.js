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

// console.log(maximumSwap(1124))


function getExpirationDate(year, month, day) {
  // TODO
  switch (month) {
    case 12: // 12月 考虑年份的增加
      year += 1
      month = 1
      break
    case 1: // 一月 考虑是否为闰年 闰年的2月天数29
      month += 1
      if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) { // 闰年
        if (day > 28) { // 一月29 - 31，到期时间为下个月 29
          day = 29
        }
      } else {
        if (day > 27) { // 一月29 - 31，到期时间为下个月 28
          day = 28
        }
      }
      break
    default:
      month += 1
      break
  }
  return [year, month, day];
}

// console.log(getExpirationDate(2020, 2, 29))
// console.log(getExpirationDate(2018, 11, 10))