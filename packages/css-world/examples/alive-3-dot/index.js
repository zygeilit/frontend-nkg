
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="alive-3-dot-container">
      <p className="a3dt-note">1. 使用 content 中定义 \A 处理换行，结合 line-heihgt + translateY 使用动画处理显示区域的Y轴显示</p>

      <div className="alive-3-dot">
        等待中<dot></dot>
      </div>
    </div>
  }
}
