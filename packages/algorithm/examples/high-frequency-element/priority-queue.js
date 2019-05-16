import MaxHeap from './max-heap'

export default class PriorityQueue {

  constructor() {
    this.maxHeap = new MaxHeap()
  }

  getSize() {
    return this.maxHeap.size()
  }

  isEmpty() {
    return this.maxHeap.isEmpty()
  }

  getFront() {
    return this.maxHeap.findMax()
  }

  enqueue(item) {
    this.maxHeap.add(item)
  }

  dequeue() {
    return this.maxHeap.extractMax()
  }

  getItems() {
    return this.maxHeap.items
  }
}
