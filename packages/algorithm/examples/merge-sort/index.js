
import React, { Component } from 'react'

class Popup {

  constructor(items) {
    this.items = items || []
  }

  merge(left, right) {
    let result = []

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    while (left.length) {
      result.push(left.shift())
    }

    while (right.length) {
      result.push(right.shift())
    }

    return result
  }

  sort(arr) {
    // 递归参数
    let len = arr.length
    let items = arr

    if (len < 2) {
      return items
    }

    let middle = Math.floor(len/2)
    let left = items.slice(0, middle)
    let right = items.slice(middle)

    // merge sort 使用
    return this.merge(this.sort(left), this.sort(right))
  }
}

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'values': [ 1,2,23,2342,3,34,345,35,35,5,555,6,7,7,7,7878,789,8 ],
      'elements': []
    }
  }

  onChangeHanlder(e) {
    this.setState({
      'values': e.target.value.split(',')
    })
  }

  onClickHanlder() {
    let pop = new Popup(this.state.values)
    let elements = pop.sort()
    this.setState({
      elements
    })
  }

  componentDidMount() {
    let pop = new Popup(this.state.values)
    let elements = pop.sort(this.state.values)
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
        JSON.stringify(this.state.elements, null, 2).replace(/\"/g, '')
      }</div>
    </div>
  }
}
