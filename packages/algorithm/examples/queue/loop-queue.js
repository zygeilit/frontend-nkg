export default class Queue {
  
  constructor(capacity) {
    this.items = new Array(capacity + 1)
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
    return this.items.length - 1
  }
  
  enqueue(item) {
    if(((tail + 1) % this.items.length) == this.front) {
      this.resize(this.getCapacity() * 2)
    }
    this.items[tail] = item
    this.tail = (this.tail + 1) % this.items.length
    this.size ++
  }

  dequeue() {
    if(this.isEmpty()) {
      throw new Error(`Cannot dequeue from an empty queue.`)
    }
    let ret = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.items.length
    this.size --

    if(this.size == this.getCapacity() / 4 && this.getCapacity() / 2 != 0) {
      this.resize(getCapacity() / 2)
    }
    return ret
  }

  resize(newCapacity) {
    let newItems = new Array(newCapacity)
    for(let i=0; i<this.size; i++) {
      newItems[i] = this.items[(i + front) % this.items.length]
    }
    this.items = newItems
    this.front = 0
    this.tail = size
  }

  getFront() {
    if(this.isEmpty()) {
      throw new Error("Queue is empty.")
    }
    return this.items[0]
  }
  
  toString() {
    let s = `
      Queue: size = ${this.size} capacity = ${this.getCapacity()}
      front [
    `
    for(let i=this.front; i!=this.tail; i=(i + 1) % this.items.length) {
      s += this.items[i]
      if ((i + 1) % this.items.length != this.tail) {
        s += ","
      }
    }
    s += `
      ] tail
    `
    return s
  }
}