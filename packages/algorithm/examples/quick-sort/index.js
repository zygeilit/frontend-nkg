
import React, { Component } from 'react'

class Popup {

  constructor(items) {
    this.items = items || []
  }

  partition(items, startIndex, endIndex) {
    let pivot = items[startIndex]
    let left = startIndex
    let right = endIndex
    let index = startIndex

    while(right >= left) {
      while(right >= left) {
        if(items[right] < pivot) {
          items[left] = items[right]
          index = right
          left++
          break
        }
        right--
      }

      while(right >= left) {
        if(items[left] > pivot) {
          items[right] = items[left]
          index = left
          right--
          break
        }
        left++
      }
    }

    items[index] = pivot
    return index
  }

  sort(items, startIndex, endIndex) {
    if (startIndex >= endIndex) {
      return
    }

    let pivotIndex = this.partition(items, startIndex, endIndex)

    this.sort(items, startIndex, pivotIndex - 1)
    this.sort(items, pivotIndex + 1, endIndex)
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
    pop.sort(this.state.values, 0, this.state.values.length-1)
    this.setState({
      'elements': this.state.values
    })
  }

  componentDidMount() {
    let pop = new Popup(this.state.values)
    pop.sort(this.state.values, 0, this.state.values.length-1)
    this.setState({
      'elements': this.state.values
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
