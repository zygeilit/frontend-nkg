
import React, { Component } from 'react'
// import request from 'request'

// generate迭代器
let z = 1
function generateFunc() {
  return (function* foo() {
    let x = yield 2
    z++
    let y = yield (x * z)
    console.log(x, y, z)
  })
}

function execSymbol() {
  let a = [1, 3, 5, 7, 9]
  let it = a[Symbol.iterator]()
  return it
}

// 内联函数创建迭代器
function inlineAPISymbol() {
  return (function () {
    let nextval
    return {
      [Symbol.iterator]: function () { return this },
      'next': function () {
        if (nextval === undefined) {
          nextval = 1
        } else {
          nextval = (3 * nextval) + 6
        }
        return {
          'done': false,
          'value': nextval
        }
      }
    }
  })()
}

// 生成器迭代器
function generateIterator() {
  return (function* something() {
    try {
      let nextval
      while (true) {
        if (nextval === undefined) {
          nextval = 1
        } else {
          nextval = (3 * nextval) + 6
        }
        yield nextval
      }
    } catch (e) { // for of循环终止信号不会触发catch
      console.log('error:' + e)
    } finally {
      console.log('cleaning up!')
    }
  })
}

// 异步
// 并不是在消息传递的意义上使用 yield，而只是将其用于流程控制实现暂停 / 阻塞
function asyncGenerateIterator() {
  function foo(x, y) {
    fetch(`http://cmp.italent-inc.cn/api/v2/components${x}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        it.next(response)
      })
      .catch(function(err) {
        it.throw(err) // throw触发try...catch
      })
  }
  function *main() {
    try {
      // 执行到 yield 时暂停，待返回 text
      // 我们暂停的 yield 表达式直接接收到了这个值
      let text = yield foo('?name=@beisen-phoenix/button')
      console.log(text)
    } catch (e) {
      console.error(e)
    }
  }
  let it = main()
  console.log(it.next().value + ' first next')
}

export default class extends Component {
  render() {

    // generate迭代器
    let foo = generateFunc()
    for (let i of foo()) {
      console.log(i)
    }

    // 使用 Symbol.iterator 创建迭代器
    let it = execSymbol()
    console.log(it.next().value)
    console.log(it.next().value)
    console.log(it.next().value)

    // 内联函数创建迭代器
    let somethine = inlineAPISymbol()
    console.log(somethine.next().value)
    console.log(somethine.next().value)
    console.log(somethine.next().value)

    // 生成器迭代器
    console.log('生成器迭代器')
    let som = generateIterator()()
    for (let v of som) {
      console.log(v)
      if (v > 500) {
        console.log(
          // 手动触发终止信号
          som.return('manual stop for...of').value
        )
        // break;
      }
    }

    asyncGenerateIterator()

    return <div />
  }
}
