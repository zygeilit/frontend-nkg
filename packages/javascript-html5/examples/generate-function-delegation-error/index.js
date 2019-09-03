
import React, { Component } from 'react'

function *foo(x) {
  try {
    yield 'B'
  } catch (e) {
    console.log(`error caught inside *foo(): ${e}`)
  }

  yield 'C'
  throw 'D'
}

function *bar() {
  yield 'A'

  try {
    yield *foo()
  } catch (e) {
    console.log(`error caught inside *bar(): ${e}`)
  }

  yield 'E'
  yield *baz()
  yield 'G'
}

function *baz() {
  throw 'F'
}

export default class extends Component {
  render() {

    var it = bar()

    console.log(`outside: ${it.next().value}`)
    console.log(`outside: ${it.next(1).value}`)
    console.log(`outside: ${it.throw(2).value}`)
    // error caught inside *foo(): 2
    // C
    console.log(`outside: ${it.next(3).value}`)
    // error caught inside *bar(): D
    // E
    try {
      console.log(`outside: ${it.next(4).value}`)
    } catch (e) {
      console.log(`error caught outside: ${e}`)
    }
    // error caught outside: F
    return <div />
  }
}
