
import React, { Component } from 'react'
import LinkedList from './linked-list'

export default class extends Component {

  render () {

    let linkedlist = new LinkedList()

    for (let i=0; i<4; i++) {
      linkedlist.add(`我是 ‘${i}’ 元素`)
    }

    let j = linkedlist.toJson()

    return <pre>{
      JSON.stringify(j, null, 2)
    }</pre>
  }
}
