/**
 * 传入一组数据集合和设定的数字 number
 * 循环遍历数组内元素，遍历到的元素为指定数字 number 时将该元素删除，直至数组剩下一个元素。
 */

class Queue {
  constructor() {
    // 用于存储队列数据
    this.queue = []
    this.count = 0
  }
  // 入队方法
  enQueue(item) {
    this.queue[this.count++] = item
  }
  // 出队方法
  deQueue() {
    if (this.isEmpty()) {
      return
    }
    // 删除 queue 的第一个元素
    // delete this.queue[0]
    // 利用 shift() 移除数组的第一个元素
    this.count--
    return this.queue.shift()
  }
  isEmpty() {
    return this.count === 0
  }
  // 获取队首元素值
  top() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[0]
  }
  size() {
    return this.count
  }
  clear() {
    this.queue = []
    this.count = 0
  }
}

function passGame(list, number) {
  const queue = new Queue()

  // 将list中每个元素入队
  for (let i of list) {
    queue.enQueue(i)
  }

  // 开始计数
  // 队列中只剩下1个元素时停止计数
  while (queue.size() > 1) {
    // 不等于number 重新加入队尾
    for (let i = 0; i < number - 1; i++) {
      queue.enQueue(queue.deQueue())
    }

    // 等于number 直接从队列删除
    queue.deQueue()
  }

  return list.indexOf(queue.top())

}


const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", names[targetIndex]); //--> lily