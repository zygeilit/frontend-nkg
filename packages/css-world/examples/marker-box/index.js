
import React, { Component } from 'react'

export default class extends Component {
  render () {
    return <div>
      <p>外在盒子，内在盒子（容器盒子），标记盒子（附加盒子）</p>
      <p>LI有一个标记盒子，处理前面的符号</p>
      <ul>
        <li>我是第一行LI</li>
        <li style={{ listStyle: 'square' }}>我是第二行LI</li>
        <li style={{ listStyle: 'inside' }}>我是第三行LI</li>
      </ul>
    </div>
  }
}
