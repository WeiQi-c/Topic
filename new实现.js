function creat(fun, ...args) {
  const obj = {}
  obj.__proto__ = fun.prototype
  const res = fun.apply(obj, args)
  return res instanceof Object ? res : obj
}

function MyObj(name) {
  this.name = name
}

const a = new MyObj('red')
const b = creat(MyObj, 'black')
console.log(a)
console.log(b)

console.log(a.__proto__ === MyObj.prototype)


function _new(constructor, ...args) {
  // 构造函数类型合法判断
  if (typeof constructor !== 'function') {
    throw new Error('constructor must be a function');
  }
  // 新建空对象实例
  let obj = new Object();
  // 将构造函数的原型绑定到新创的对象实例上
  obj.__proto__ = Object.create(constructor.prototype);
  // 调用构造函数并判断返回值
  let res = constructor.apply(obj, args);
  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  // 如果有返回值且返回值是对象类型，那么就将它作为返回值，否则就返回之前新建的对象
  return isObject || isFunction ? res : obj;
}