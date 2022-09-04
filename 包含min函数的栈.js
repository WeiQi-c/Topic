class Stack {
  constructor() {
    this.data = []
    this.minData = []
  }

  // 入栈
  push(val) {
    if (!val) return
    // this.data.push(val)
    this.data[this.data.length] = val
    if (!this.minData.length || val <= this.min()) {
      this.minData[this.minData.length] = val
    }
  }
  // 出栈
  pop() {
    if (this.isEmpty()) {
      return
    }
    const res = this.data[this.data.length - 1]
    if (res === this.min()) {
      this.minData.length -= 1
    }
    this.data.length -= 1
    return res
  }
  // 判断栈是否为空
  isEmpty() {
    return this.data.length === 0
  }

  // 取最小值
  min() {
    return this.minData[this.minData.length - 1]
  }

}