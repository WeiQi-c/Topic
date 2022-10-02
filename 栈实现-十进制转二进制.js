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
  // peek() 查看栈顶元素
  peek() {
    return this.data[this.data.length - 1];
  }
  // size() 获取栈中元素个数
  size() {
    return this.data.length
  }

}

function dec2bin(dec) {
  // new 一个 Stack，保存余数
  const stack = new Stack()

  while (dec > 0) {
    // 除二取余法
    stack.push(dec % 2) // 获取余数，放入栈中
    dec = Math.floor(dec / 2) // 除数除以二，向下取整
  }

  let binaryString = ""
  // 不断地从栈中取出元素（0 或 1），并拼接到一起。
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString
}
console.log(dec2bin(100))