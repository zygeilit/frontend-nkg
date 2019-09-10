
import React, { Component } from 'react'

function *koo(url) {
  try {
    console.log(`requesting: ${url}`)
    let val = yield fetch(url).then(r => r.json())
    console.log(val)
  } catch (e) {
    console.log(`Oops: ${e}`)
    return false
  }
}

function foo(url) {
  let state;
  let val;

  function process(v) {
    switch(state) {
      case 1:
        console.log(`requesting: ${url}`)
        return fetch(url).then(r => r.json())
      case 2:
        val = v
        console.log(val)
        return
      case 3:
        let err = v
        console.log(`Oops: ${err}`)
        return false
    }
  }

  return {
    next: function(v) {
      if (!state) {
        state = 1
        return {
          'done': false,
          'value': process()
        }
      } else if (state == 1) {
        state = 2
        return {
          'done': false,
          'value': process(v)
        }
      } else {
        return {
          'done': false,
          'value': undefined
        }
      }
    },
    throw: function(e) {
      if (state == 1) {
        state = 3
        return {
          'done': true,
          'value': process(e)
        }
      } else {
        throw e
      }
    }
  }
}

export default class extends Component {

  constructor() {
    super()
    this.state = {
      'component': null
    }
  }

  componentDidMount() {
    let it = foo(`http://cmp.italent-inc.cn/api/v2/components?name=@beisen-phoenix/button`)
    it.next().value.then(cmps => {
      this.setState({ 'component': cmps[0] })
    })
    it.throw(`Error from throw fn`)
    it.next('print someting in console')
  }

  render() {
    let { component } = this.state
    return <div>{
      JSON.stringify(component, null, 2)
    }</div>
  }
}
