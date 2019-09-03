
import React, { Component } from 'react'

let res = []
function *reqData(url) {
  res.push(
    yield fetch(url).then(r => r.json())
  )
}

let res1 = []
function *reqData1(url) {
  let data = yield fetch(url).then(r => r.json())
  // 控制转移
  yield
  res1.push(data)
}

export default class C extends Component {
  render() {

    let it1 = reqData(`http://cmp.italent-inc.cn/api/v2/components?name=@beisen-phoenix/button`)
    let it2 = reqData(`http://cmp.italent-inc.cn/api/v2/components?name=@beisen-phoenix/form`)

    let p1 = it1.next().value
    let p2 = it2.next().value

    p1.then(function (data) {
      it1.next(data)
      return p2
    }).then(function (data) {
      it2.next(data)
    }).then(() => {
      console.log(res)
    })

    return <div />
  }
}

export class A extends Component {
  render() {

    let it1 = reqData1(`http://cmp.italent-inc.cn/api/v2/components?name=@beisen-phoenix/button`)
    let it2 = reqData1(`http://cmp.italent-inc.cn/api/v2/components?name=@beisen-phoenix/form`)

    let p1 = it1.next().value
    let p2 = it2.next().value

    p1.then(function (data) {
      it1.next(data)
      return p2
    })
    p2.then(function (data) {
      it2.next(data)
    })
    
    Promise.all([p1, p2])
      .then(function () {
        it1.next()
        it2.next()
      }).then(r => console.log(res1))

    return <div />
  }
}
