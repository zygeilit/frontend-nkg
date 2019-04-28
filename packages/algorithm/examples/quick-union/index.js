
import React, { Component } from 'react'
import QuickUnion from './quick-union'


export default class extends Component {

  constructor (props) {
    super(props)
    this.unionFinder = new QuickUnion([])
    this.state = {
      'elements': [],
      'sets': [],
      'isConnected': null
    }
  }

  onChangeHandler (e) {
    let elements = this.refs.elements.value.split(',')
    this.unionFinder = new QuickUnion(elements)
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

  onIsConnectedClickHandler () {
  	let clca = this.refs.clca.value
    let clcb = this.refs.clcb.value
    this.setState({
      'isConnected': this.unionFinder.isConnected(clca, clcb)
    })
  }

  render () {
    let { elements, sets, isConnected } = this.state
    return <div>
      <div style={{ marginBottom: 20 }}>
        链接问题<br/>查询: O(h) 合并：O(h)。h是节点的树的高度
      </div>

      <input ref="elements" />
      <input type="button" value="find" onClick={ this.onChangeHandler.bind(this) } />
      <br/>
      <input ref="input" ref="elea" /> - <input ref="input" ref="eleb" />
      <input type="button" value="connect" onClick={ this.onConnectClickHandler.bind(this) } />
      <br/>
      <input ref="input" ref="clca" /> - <input ref="input" ref="clcb" />
      <input type="button" value="isConnected?" onClick={ this.onIsConnectedClickHandler.bind(this) } />
      <div>
        <p>Elements</p>
        <p>[ { elements.join(', ') } ]</p>
        <p>Sets</p>
        <p>[ { sets.join(', ') } ]</p>
        <p>isConnected?</p>
        <p>[ { isConnected === null ? '无' : (isConnected === false ? '未链接' : '已链接') } ]</p>
      </div>
    </div>
  }
}
