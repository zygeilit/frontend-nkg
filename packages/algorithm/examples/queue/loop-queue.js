export default class Queue {
  
  constructor(capacity) {
    this.items = []
    this.capacity = capacity
    this.front = 0
    this.tail = 0
    this.size = 0
  }
  
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.front == this.tail
  }
  getCapacity() {
    return this.capacity
  }
  
  enqueue(item) {
    if(((tail + 1) % (this.capacity + 1)) == this.front) {

    }
  }

  resize(newCapacity) {
    this
  }

  dequeue() {
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