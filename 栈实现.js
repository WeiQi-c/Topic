class Stack {
  constructor() {
    this.data = []
  }

  // 入栈
  push(val) {
    // this.data.push(val)
    this.data[this.data.length] = val
  }
  // 出栈
  pop() {
    if (this.isEmpty()) {
      return
    }
    const res = this.data[this.data.length - 1]
    this.data.length -= 1
    return res
  }
  // 判断栈是否为空
  isEmpty() {
    return this.data.length === 0
  }

}