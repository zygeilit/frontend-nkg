
import React, { Component } from 'react'

class Popup {

  constructor(items) {
    this.items = items || []
  }

  sort() {
    let folen = this.items.length - 1
    let items = this.items

    for(let ia=0; ia<folen; ia++) {
      for(let i=0; i<folen - ia; i++) {
        if (items[i] > items[i + 1]) {
          let temp = items[i]
          items[i] = items[i + 1]
          items[i + 1] = temp
        }
      }
    }

    return items
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
