
const swap = (items, i, j) => {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
  }
  
  // 规则：
  // 1. parent
  // 2. left
  // 3. right
  // 4. nonleaf item 最后一个非叶子节点
  
  // 大顶堆
  export default class MaxHeap {
  
    constructor(items) {
      this.items = items || []
      this.heapify() // 如果传入了items，则调整为大顶堆
    }
  
    size() {
      return this.items.length
    }
  
    isEmpty() {
      return !!this.items.length
    }
  
    parent(i) {
      if (i === 0) {
        throw new Error('index-0 doesn\'t have parent.')
      }
      return (i - 1) / 2
    }
  
    left(i) {
      return i * 2 + 1
    }
  
    right(i) {
      return i * 2 + 2
    }
  
    add(item) {
      this.items.push(item) // 不满足子节点都小于父节点
      this.siftUp(this.items.length - 1)
    }
  
    siftUp(i) {
      while (i > 0 && this.items[this.parent(i)] < this.items[i]) {
        swap(this.items, i, this.parent(i))
        i = this.parent(i)
      }
    }
  
    siftDown(i) {
      while (this.left(i) < this.items.length) {
        let j = this.left(i)
        // 自节点比较最大
        if (j + 1 < this.items.length && this.items[j + 1] > this.items[j]) {
          j = this.right(i)
        }
        // 父节点与最大子节点进行比较
        if (this.items[i] >= this.items[j]) {
          break
        }
        swap(this.items, i, j)
        i = j
      }
    }
  
    extractMax() {
      let temp = this.findMax()
      swap(this.items, 0, this.items.length - 1)
      this.items.pop()
      this.siftDown(0)
      return temp
    }
  
    findMax() {
      if (this.items.length === 0) {
        throw new Error('Can not findMax when heap is empty')
      }
      return this.items[0]
    }
  
    replace(item) {
      let maxItem = this.findMax()
      this.items[0] = item
      this.siftDown(0)
      return maxItem
    }
  
    heapify() {
      if (!this.items.length) {
        return
      }
      let nonleafIndex = this.parent(this.items.length-1) // 最后一个非叶子节点 
      for(let i=nonleafIndex; i>=0; i--) {
        this.siftDown(i)
      }
    }
  }
  