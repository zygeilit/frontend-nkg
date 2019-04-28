
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="vertical-align-ghost-white-container">
      <p className="valge-note">1. vertical-align 起作用的前置条件是：内联元素、table-cell</p>
      <p className="valge-note">2. 图1中，vertical-align 未起作用是因为 “空白幽灵节点” 导致</p>
      <p className="valge-note">3. 图2中，起作用是因为添加的 line-height，使空白节点的高度与容器高度一直</p>

      <div className="vertical-align-ghost-white">
        <img src="http://www.hinews.cn/pic/0/10/46/63/10466303_629389.jpg" />
      </div>

      <div className="vertical-align-ghost-white-1">
        <img src="http://www.hinews.cn/pic/0/10/46/63/10466303_629389.jpg" />
      </div>
    </div>
  }
}
