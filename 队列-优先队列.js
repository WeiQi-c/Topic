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

/**
 * 优先级队列主要考虑的问题：
 * 每个元素不再只是一个数据，还包含优先级。
 * 在添加元素过程中，根据优先级放入到正确位置。
 */

// 优先队列内部的元素类
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// 优先队列类（继承 Queue 类）
class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  // 重写 enqueue()
  enqueue(element, priority) {
    // 根据传入的元素，创建 QueueElement 对象
    const queueElement = new QueueElement(element, priority);

    // 判断队列是否为空
    if (this.isEmpty()) {
      // 如果为空，不用判断优先级，直接添加
      this.queue.push(queueElement);
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false;

      for (let i = 0; i < this.queue.length; i++) {
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < this.queue[i].priority) {
          // 在指定的位置插入元素
          this.queue.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.queue.push(queueElement);
      }
    }
    this.count++
  }

  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue() {
    return super.deQueue();
  }

  // top() 查看队列的前端元素
  // 继承 Queue 类的 top()
  top() {
    return super.top();
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty() {
    return super.isEmpty();
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return this.count;
  }
}

const priorityQueue = new PriorityQueue();

// 入队 enqueue() 测试
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 15);
priorityQueue.enqueue("C", 11);
priorityQueue.enqueue("D", 20);
priorityQueue.enqueue("E", 18);
console.log(priorityQueue.queue);


// 出队 dequeue() 测试
priorityQueue.dequeue();
console.log(priorityQueue.queue);
//--> output:
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}


