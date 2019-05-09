
import React, { Component } from 'react'

class ShellSort {

  constructor(items) {
    this.items = items || []
  }

  sort() {
    let items = this.items
    let len = items.length
    let temp
    let gap = Math.floor(len / 2)

    while (Math.floor(gap) > 0) {
      
      for (let i=gap; i<len; i++) {
        temp = items[i]
        let preIndex = i - gap
        
        while (preIndex >=0 && items[preIndex] > temp) {
          items[preIndex + gap] = items[preIndex]
          preIndex -= gap
        }

        items[preIndex + gap] = temp
      }

      gap = Math.floor(gap / 2)
    }

    return items
  }
}

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'values': [ 2,35,7,5,23,35,7,2342,789,7878,345,3,1,34,5,6,7,8 ],
      'elements': []
    }
  }

  onChangeHanlder(e) {
    this.setState({
      'values': e.target.value.split(',')
    })
  }

  onClickHanlder() {
    let ins = new ShellSort(this.state.values)
    let elements = ins.sort()
    this.setState({
      elements
    })
  }

  componentDidMount() {
    let ins = new ShellSort(this.state.values)
    let elements = ins.sort()
    this.setState({
      elements
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
        JSON.stringify(this.state.elements, null, 2)
      }</div>
    </div>
  }
}
