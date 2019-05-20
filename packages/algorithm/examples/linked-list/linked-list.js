
class Node {
  constructor(value, next) {
    this.value = value || null
    this.next = next || null
  }
  toString() {
    return this.value.toString()
  }
}

export default class LinkedList {

  constructor () {
    this.head = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size == 0
  }

  addFirst(value) {
    this.head = new Node(value, this.head)
    this.size ++
  }

  add(index, value) {
    if(index <0 || index > size) {
      throw new Error(`Add failed. Illegal index.`)
    }
    
    if(index == 0) {
      this.addFirst(value)
    } else {

      let prev = this.head
      for(let i=0; i<index-1; i++) {
        // let node = new Node(value)
        // node.next = prev.next
        // prev.next = node
        prev.next = new Node(value, prev.next)
        this.size ++
      }
    }
  }

  addLast(value) {
    this.add(this.size, value)
  }
}
