
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="ex-container">
      <p className="exc-note">http://www.mamicode.com/info-detail-2236552.html</p>
      <p className="exc-note">基于ex单位的天然垂直居中对齐效果实例页面</p>
      <p className="exc-note">1. ex 是基于 x-height 高度的一半</p>
      <p className="exc-note">2. 不同字体的基线定义不一致，这里使用 top</p>

      <div className="ex-dropdown">
        我是下拉框
        <span className="ex-dropdown-icon"></span>
      </div>
    </div>
  }
}
