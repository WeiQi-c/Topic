function throttle(fn, delay) {
  let last = 0 // 记录上次触发时间
  return function (...args) {
    const now = Date.now()
    if (now - last > delay) { // 计算时间差
      last = now
      fn.apply(this, args)
    }
  }
}

function throttle(fn, delay) {
  let flag = true
  return function () {
    if (!flag) {
      return
    }
    flag = false // 延时之后变为 true，进入下一次
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay)
  }
}