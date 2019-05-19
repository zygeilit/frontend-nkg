
import React, { Component } from 'react'
import PriorityQueue from './priority-queue'

class HighFrequencyElement {

  topKFrequent(nums, k) {
    let map = {}
    
    for(let i=0; i<nums.length; i++) {
      let it = nums[i]
      if(map[it] !== undefined) {
        map[it] = map[it] + 1
      } else {
        map[it] = 1
      }
    }

    console.log(map)

    let pg = new PriorityQueue()
    let priKeySets = Object.keys(map)

    for(let i=0; i<priKeySets.length; i++) {
      let it = priKeySets[i]
      if(pg.getSize() < k) {
        pg.enqueue(it) // 放入前K个元素
      } else if(map[it] > pg.getFront()) { // 后K个元素分别和优先级队列中的优先级最高的元素进行比较
        pg.dequeue()
        pg.enqueue(it)
      }
    }

    console.log(pg.getItems())

    let ret = []
    while(!pg.isEmpty()) ret.push(pg.dequeue())

    return ret
  }
}

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      'values': [ 1,2,23,2342,3,34,345,35,35,5,2,555,6,7,7,7,7878,789,8 ],
      'elements': []
    }
    this.priorityQueue = new PriorityQueue()
  }

  componentDidMount() {
    let hft = new HighFrequencyElement()
    let kFronent = hft.topKFrequent(this.state.values, 2)

    this.setState({
      'elements': kFronent
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
        value={this.state.values}></input>

      <div>排序后值：</div>
      <div>{
        JSON.stringify(this.state.elements, null, 2).replace(/\"/g, '')
      }</div>
    </div>
  }
}
