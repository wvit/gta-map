class Scheduler {
  constructor(maxCount) {
    this.maxCount = maxCount
  }

  maxCount

  awaitTask = []

  currentCount = 0

  async add(fn, runTask = false) {
    this.currentCount++

    if (this.currentCount > this.maxCount && !runTask) {
      return this.awaitTask.push(fn)
    }

    await fn()
    this.currentCount--
    const task = this.awaitTask.shift()
    if (task) this.add(task, true)
  }
}

// 异步任务函数
const fetchUser = (name, delay) => {
  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log(name)
        resolve()
      }, delay)
    })
}
const scheduler = new Scheduler(2)
scheduler.add(fetchUser('A', 2000))
scheduler.add(fetchUser('B', 1000))
scheduler.add(fetchUser('C', 800))
scheduler.add(fetchUser('D', 500))

// 打印顺序: B C A D
