
class Node {
  constructor(value) {
    this.value = value
    this.parent = undefined
  }
}

export default class LinkedList {

  constructor (defautList = []) {
    this.list = []
    this.headIndex = undefined
  }

  add (value) {
    this.list.push(new Node(value))
    let newNodeIndex = this.list.length - 1

    if (this.headIndex !== undefined) {
      let headNode = this.list[this.headIndex]
      headNode.parent = newNodeIndex  
    }

    this.headIndex = newNodeIndex
  }

  toJson () {
    return {
      'type': 'LinkedList',
      'head': this.list[this.headIndex],
      'elements': this.list
    }
  }

  addWithIndex (value, index) {
    
  }
}
