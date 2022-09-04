/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.data = {}
  this.ptr = 1
  this.max = n
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.data[idKey] = value
  if (idKey === this.ptr) {
    const arr = []
    while (this.data[idKey]) {
      arr.push(this.data[idKey])
      idKey++
    }
    this.ptr = idKey++
    return arr
  } else {
    return []
  }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const a = new OrderedStream(5)