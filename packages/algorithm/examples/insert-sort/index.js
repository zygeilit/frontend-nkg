
import React, { Component } from 'react'

class InsertSort {

  constructor(elements) {
    this.elements = elements || []
    this.sortedElementIndex = 0;
  }

  sort() {
  	let sortedElements = this.elements.slice(0, 1)
  	let unSortedElements = this.elements.slice(1, this.elements.length-1)
  	
  	// while(unSortedElements.length) {
  	// 	let sortTarget = unSortedElements.pop()

  	// 	for(let i=0; i<sortedElements.length; i++) {
   //      if (sortedElements[i] <= sortTarget && ) {
   //      	sortedElements.splice(i, 0, sortTarget)
   //      } else {
   //      	sortedElements.splice(i+1, 0, sortTarget)
   //      }
   //    }
  	// }

  	this.elements = sortedElements.concat(unSortedElements)
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
    let ins = new InsertSort(this.state.values)
    let elements = ins.sort()
    this.setState({
      elements
    })
  }

  componentDidMount() {
    let ins = new InsertSort(this.state.values)
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
        JSON.stringify(this.state.elements, null, 2).replace(/\"/g, '')
      }</div>
    </div>
  }
}
