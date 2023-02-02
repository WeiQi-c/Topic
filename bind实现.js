Function.prototype.myBind = function (target, ...outArgs) {
  target = target || {} // 处理边界条件
  const symbolKey = Symbol()
  target[symbolKey] = this
  return function (...innerArgs) { // 返回一个函数
    const res = target[symbolKey](...outArgs, ...innerArgs) // outArgs和innerArgs都是一个数组，解构后传入函数
    // delete target[symbolKey] 这里千万不能销毁绑定的函数，否则第二次调用的时候，就会出现问题。
    return res
  }
}

let obj1 = {
  name: 'tom',
  say: function () {
    console.log(this.name)
  }
}

let obj2 = {
  name: 'jerry'
}

obj1.say.myBind(obj2)()