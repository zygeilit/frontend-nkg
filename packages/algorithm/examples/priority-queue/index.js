
import React, { Component } from 'react'

class PriorityQueue {

  constructor() {
    this.items = []
  }

  add(item) {
    if (!this.items.length) {
      return this.items.push(item)
    }
    for(let i=0; i<this.items.length; i++) {
      if(item < this.items[i]) {
        let mi = this.items[i]
        for(let j=i; j<this.items.length; j++) {
          let temp = this.items[j+1]
          this.items[j+1] = mi
          mi = temp
        }
        break
      }
    }
    console.log(this.items)
  }

  get() {
    return this.items.shift()
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

  onChangeHanlder(e) {
    this.setState({
      'values': e.target.value.split(',')
    })
  }

  onClickHanlder() {
    pop.sort(this.state.values, 0, this.state.values.length-1)
    this.setState({
      'elements': this.state.values
    })
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
