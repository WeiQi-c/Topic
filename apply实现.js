Function.prototype.myApply = function (context, args) { // 这里第二个参数直接就是个数组
  context = context || window
  const symbolKey = Symbol()
  context[symbolKey] = this
  const res = context[symbolKey](...args) // args本身是个数组，所以我们需要解构后一个个传入函数中
  delete context[symbolKey] // 执行完借用的函数后，删除掉，留着过年吗？
  return res
}