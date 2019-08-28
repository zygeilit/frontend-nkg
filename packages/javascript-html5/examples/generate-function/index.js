
import React, { Component } from 'react'

function *foo(x) {
  var y = x * (yield "Hello")
  return y 
}

export default class extends Component {
  render() {

    var it = foo(6)

    var res = it.next()
    console.log(res.value)

    res = it.next(7)
    console.log(res.value)

    return <div />
  }
}
