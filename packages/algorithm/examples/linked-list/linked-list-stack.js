import LinkedListDummyHead from './linked-list-dummy-head'

export default class LinkedListStack {
  constructor() {
    this.list = new LinkedListDummyHead()
  }

  getSize() {
    return this.list.getSize()
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  push(value) {
    this.list.addFirst(value)
  }
  pop() {
    return this.list.removeFirst()
  }
  peek() {
    return this.list.getFirst()
  }
}