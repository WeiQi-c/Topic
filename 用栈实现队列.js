const MyQueue = function () {
  this.stack1 = []
  this.stack2 = []

}

MyQueue.prototype.add = function (n) {
  this.stack1.push(n)
}

MyQueue.prototype.delete = function () {
  if (this.stack2.length) {
    this.stack2.pop()
  } else {
    if (this.stack1.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop()
    } else {
      return -1
    }
  }
}

MyQueue.prototype.get = function () {
  return this.stack1.length + this.stack2.length
}
const qe = new MyQueue()
console.log(qe)

qe.add(2)
qe.add(3)
qe.add(6)
qe.get()
qe.delete()
console.log(qe)