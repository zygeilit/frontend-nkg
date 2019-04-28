
import React, { Component } from 'react'
import QuickFind from './quick-find'


export default class extends Component {

  constructor (props) {
    super(props)
    this.unionFinder = new QuickFind([])
    this.state = {
      'elements': [],
      'sets': [],
    }
  }

  onChangeHandler (e) {
    let elements = this.refs.elements.value.split(',')
    this.unionFinder = new QuickFind(elements)
    this.setState({
      'elements': elements,
      'sets': this.unionFinder.get()
    })
  }

  onConnectClickHandler () {
    let elea = this.refs.elea.value
    let eleb = this.refs.eleb.value
    this.setState({
      'sets': this.unionFinder.unionElement(elea, eleb)
    })
  }

  render () {
    let { elements, sets } = this.state
    return <div>

      <div style={{ marginBottom: 20 }}>
        链接问题<br/>查询: O(1)<br/>合并：O(n)
      </div>

      <input ref="elements" />
      <input type="button" value="find" onClick={ this.onChangeHandler.bind(this) } />
      <br/ >
      <input ref="input" ref="elea" /> - <input ref="input" ref="eleb" />
      <input type="button" value="connect" onClick={ this.onConnectClickHandler.bind(this) } />
      <div>
        <p>Elements</p>
        <p>[ { elements.join(', ') } ]</p>
        <p>Sets</p>
        <p>[ { sets.join(', ') } ]</p>
      </div>
    </div>
  }
}
