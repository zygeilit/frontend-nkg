
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="anchor-position">
      <p className="anchor-position-note">全屏展示该示例，url后添加 “#anchor” 可见效果</p>
      <p className="anchor-position-note">1. inline块 中使用 padding 不影响与外部模块的布局，可以控制文本显示</p>

      <h1>我是h1</h1>
      <div className="content">我有很多内容，高度可达 1000px</div>
      <span className="anchor" name='anchor' id='anchor'>我是锚，我的顶部有间距</span>
      <div className="content">我有很多内容，高度可达 1000px</div>
    </div>
  }
}
