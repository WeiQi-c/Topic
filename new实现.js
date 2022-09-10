/**
 * 创建了一个全新的对象。
 * 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
 * 生成的新对象会绑定到函数调用的this。
 * 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
 * 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象
 * 链接：https://juejin.cn/post/6844903704663949325。
 */

function _new(constructor, ...args) {
  // 构造函数类型合法判断
  if (typeof constructor !== 'function') {
    throw new Error('constructor must be a function');
  }
  // 新建空对象实例
  let obj = new Object();

  // 将构造函数的原型绑定到新创的对象实例上
  obj.__proto__ = Object.create(constructor.prototype);

  let res = constructor.apply(obj, args);
  
  // 调用构造函数并判断返回值
  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  // 如果有返回值且返回值是对象类型，那么就将它作为返回值，否则就返回之前新建的对象
  return isObject || isFunction ? res : obj;
}