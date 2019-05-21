
export default class ArrayStack {
  constructor(capacity) {
    if(capacity) {
      this.items = new Array(capacity)
    } else {
      this.items = []
    }
  }

  getSize() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length == 0
  }

  pop() {
    return this.items.pop()
  }

  push(item) {
    this.items.push(item)
  }

  peek() {
    return this.items[this.items.length]
  }

  toString() {
    return this.items.toString()
  }
}
