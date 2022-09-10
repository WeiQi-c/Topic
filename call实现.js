Function.prototype.myCall = function (context) {
  context = context || window
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol()
  
  context[fn] = this  //给context添加一个方法 指向this
  let arg = [...arguments].slice(1)
  context[fn](...arg)

  delete context[fn] // 删除自定义方法
}