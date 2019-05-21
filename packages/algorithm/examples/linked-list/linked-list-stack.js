import LinkedList from "./linked-list";

export default class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
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