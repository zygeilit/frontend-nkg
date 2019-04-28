
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="column-2-auto-height-container">
      <p className="c2aht-note">1. padding-bottom 增加了容器高度，margin-bottom抵消增加的高度</p>
      <p className="c2aht-note">2. 容器多了 padding-bottom 高度的的背景色，使用 margin-bottom 把高度恢复到原始高度，视觉上看到两个容器等高</p>
      <p className="c2aht-note">3. 容器真实高度如果超出了 padding-bottom 高度，则无法等高</p>

      <div className="column-2-auto-height">
        <div className="c2aht-left">left，我比较高，我有120px</div>
        <div className="c2aht-right">right</div>
      </div>

      <p className="c2aht-note c2aht-note-top">1. 父容器table，子元素table-cell</p>
      <div className="column-2-auto-height-table-cell">
        <div className="c2aht-left">left，我比较高，我有120px</div>
        <div className="c2aht-right">right</div>
      </div>

      <p className="c2aht-note c2aht-note-top">1. 使用边框 + -margin 实现多栏等高</p>
      <p className="c2aht-note">2. 边框不支持百分比只能实现固定宽</p>
      <div className="column-2-auto-height-border">
      </div>
    </div>
  }
}
