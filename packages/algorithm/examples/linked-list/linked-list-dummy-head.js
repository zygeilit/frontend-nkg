
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

  constructor() {
    this.deummyHead = new Node(null, null)
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size == 0
  }
  
  addFirst(value) {
    this.add(0, value)
  }
  
  addLast(value) {
    this.add(this.size, value)
  }

  add(index, value) {
    if (index < 0 || index > size) {
      throw new Error(`Add failed. Illegal index.`)
    }

    let prev = this.deummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }

    prev.next = new Node(value, prev.next)
    this.size++
  }

  get(index) {
    if (index < 0 && index >= this.size) {
      throw new Error(`get failed. Illegal index.`)
    }

    let current = this.deummyHead.next
    for(let i=0; i<index; i++) {
      current = current.next
    }

    return current.value
  }

  getFirst() {
    return this.get(0)
  }
  getLast() {
    return this.get(this.size - 1)
  }

  set(index, value) {
    if(index < 0 && index > this.size) {
      throw new Error(`Update failed. Illegal index.`)
    }

    let current = deummyHead.next
    for(let i=0; i<index; i++) {
      current = current.next
    }

    current.value = value
  }

  contains(value) {
    let current = this.deummyHead.next
    
    while(current) {
      if(current.value == value) {
        return true
      }
      current = current.next
    }
    return false
  }

  toString() {
    let s = ``
    // let current = this.deummyHead.next
    // while(current) {
    //   s += `${current} ->`
    //   current = current.next
    // }
    for(let current = this.deummyHead.next; current != null; current = current.next) {
    }
    s += `NULL`
    return s
  }
}
