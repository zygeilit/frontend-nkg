
import React, { Component } from 'react'

const swap = (items, i, j) => {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

class MaxHeap {

  constructor() {
    this.items = []
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
    return (i-1) / 2
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
    while(i > 0 && this.items[this.parent(i)] < this.items[i]) {
      swap(this.items, i, this.parent(i))
      i = this.parent(i)
    }
  }

  siftDown(i) {
    while(this.left(i) < this.items.length) {
      let j = left(i)
      // 自节点比较最大
      if(j + 1 < this.items.length && this.items[j+1] > this.items[j]) {
        maxChild = right(i)
      }
      // 父节点与最大子节点进行比较
      if(this.items[i] >= this.items[maxChild]) {
        break
      }
      swap(this.items, i, j)
      i = j
    }
  }

  extractMax() {
    let temp = this.findMax()

    swap(this.items, 0, this.items.length-1)
    this.items.pop()

    this.siftDown(0)

    return temp
  }

  findMax() {
    if(this.items.length === 0) {
      throw new Error('Can not findMax when heap is empty')
    }
    return this.items[0]
  }
}

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      'values': [ 1,2,23,2342,3,34,345,35,35,5,555,6,7,7,7,7878,789,8 ],
      'elements': []
    }
    this.priorityQueue = new PriorityQueue()
  }

  componentDidMount() {
    for(let i=0; i<this.state.values.length; i++) {
      this.priorityQueue.add(this.state.values[i])
    }
    this.setState({
      'elements': this.priorityQueue.items
    })
  }

  render () {
    return <div>

      <div>输入框：</div>
      <input
        style={{
          width: 500,
          height: 40,
          fontSize: 19,
          marginBottom: 15 
        }}
        onChange={this.onChangeHanlder.bind(this)}
        value={this.state.values}></input>
      <input type="button" value="sort" onClick={this.onClickHanlder.bind(this)} />

      <div>排序后值：</div>
      <div>{
        JSON.stringify(this.state.elements, null, 2).replace(/\"/g, '')
      }</div>
    </div>
  }
}
