Function.prototype.myCall = function (context, ...args) {
  // context传入的是一个非真值的对象时，context指向window
  context = context || window
  const symbolKey = Symbol()
  //给context添加一个方法 指向this
  context[symbolKey] = this
  const res = context[symbolKey](...args) // args本身是rest参数，搭配的变量是一个数组，数组解构后就可以一个个传入函数中
  delete context[symbolKey] // 执行完借用的函数后，删除掉
  return res
}

const mbs = {
  name: '麻不烧',
  say(prefix, age) {
    console.log(this.name, prefix, age)
  }
}

const A = {
  name: '小丁'
}

mbs.say.myCall(A, 'asd', 12)