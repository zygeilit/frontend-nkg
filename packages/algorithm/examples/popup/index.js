
import React, { Component } from 'react'

class Popup {

  constructor(elements) {
    this.elements = elements || []
  }

  sort() {
    for(let ia=0; ia<this.elements.length; ia++) {
      for(let i=0; i<this.elements.length; i++) {
        let c = this.elements[i]
        let n = this.elements[i + 1]
        if (c > n) {
          this.elements[i] = n
          this.elements[i + 1] = c
        }
      }
    }
    return this.elements
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
    let pop = new Popup(this.state.values)
    let elements = pop.sort()
    this.setState({
      elements
    })
  }

  componentDidMount() {
    let pop = new Popup(this.state.values)
    let elements = pop.sort()
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
