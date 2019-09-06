
import React, { Component } from 'react'

const thunkify = (fn) => {
  return function () {
    let args = [].slice.call(arguments, 1)
    return function (cb) {
      args.push(cb)
      return fn.apply(null, args)
    }
  }
}

const fooThunk = thunkify(foo, 3, 4)

export default class extends Component {
  render() {

    fooThunk(function (sum) {
      console.log(sum)
    })

    return <div />
  }
}
