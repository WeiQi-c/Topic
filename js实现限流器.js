class Scheduler {
  constructor(maxNum) {
    this.taskList = []  //{1}
    this.count = 0
    this.maxNum = maxNum
  }
  async add(fn) {
    if (this.count >= this.maxNum) {
      return new Promise((resolve) => //{2}
        this.taskList.push(
          () => {
            this.count++
            fn().then(data => {
              this.count--
              resolve()
              if (this.taskList.length > 0) {
                this.taskList.shift()()
              }
            })
          }
        )
      )
    }
    this.count++
    return fn().then((data) => {
      console.log(data, 'asd')
      this.count--
      if (this.taskList.length > 0) {
        this.taskList.shift()() //{3}
      }
      return data
    })
  }
}

const scheduler = new Scheduler(2)

const timeout = (time) => {
  return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)

//log:2 3 1 4

// 在{ 1 } 处定义了一个任务队列。
// 执行add方法，如果此时运行的任务超过了最大限制，就会在{ 2 } 处await一个promise, 并且把promise的resolve放进任务队列中，这样这个方法就会阻塞在这里，等待promise的完成。
// 而只有在之前的任务完成之后，会去taskList中拿resolve去执行（{ 3 } 处）。
// 执行完resolve，刚才await的promise才会继续往下执行，去执行被阻塞的任务，如此循环，直到所有任务完成。