
import React, { Component } from 'react'

function *foo() {
  let x = yield 2
  z++
  let y = yield (x * z)
  console.log(x, y, z)
}

let z = 1

export default class extends Component {
  render() {

    let it1 = foo()
    let it2 = foo()

    let val1 = it1.next().value // 2
    let val2 = it2.next().value // 2
    console.log(val1, val2)

    val1 = it1.next(val2 * 10).value // 40
    val2 = it2.next(val1 * 5).value // 600 
    console.log(val1, val2)

    it1.next(val2 / 2)
    it2.next(val1 / 4)

    return <div />
  }
}
