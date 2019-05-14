
import React, { Component } from 'react'
import MaxHeap, { heapSort } from './max-heap'

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      'values': [ 1,2,23,2342,3,34,345,35,35,5,555,6,7,7,7,7878,789,8 ],
      'elements': []
    }
    this.maxHeap = new MaxHeap()
  }

  componentDidMount() {
    this.setState({
      'elements': heapSort(this.state.values)
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
      <input type="button" value="sort" />

      <div>排序后值：</div>
      <div>{
        JSON.stringify(this.state.elements, null, 2).replace(/\"/g, '')
      }</div>
    </div>
  }
}
