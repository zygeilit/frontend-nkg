
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="margin-box-size">
      <p className="bmse-note">1. 元素呈现 “包裹性” 状态时，margin 在上下间距尺寸上不起作用，如1</p>
      <p className="bmse-note">2. 元素呈现 “充分利用可用空间” 状态时，margin 可改变元素尺寸，如2</p>

      <span className="mbse-inline-box-1">包裹性 (margin: 50px;)</span>
      <span className="mbse-inline-box-2">充分利用可用空间 (margin: 200px;)</span>
    </div>
  }
}
