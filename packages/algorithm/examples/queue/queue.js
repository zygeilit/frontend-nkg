export default class Queue {
  
  constructor() {
    this.items = []
  }

  getSize() {
    return this.items.length
  }

  isEmpty() {
    return !!this.items.length
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }

  getFront() {
    return this.items[0]
  }

  toString() {
    return `
      Queue: 
      front [
        ${
          this.items.map(it => `"${it}", `)
        }
      ] tail
    `
  }
}