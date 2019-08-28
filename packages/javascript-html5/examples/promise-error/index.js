
import React, { Component } from 'react'

export default class extends Component {
  render() {

    let p = Promise.resolve(42)

    p.then(
      function fullfiled(msg) {
        console.log(msg.toLowserCase())
      },
      function rejected(err) {
        console.log(err)
      }
    )

    return <div />
  }
}
