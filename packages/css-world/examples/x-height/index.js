
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="x-height-container">
      <p className="xheight-note">1. x-height 指的就是小写字母 x 的高度，术语描述就是基线和等分线之间的距离</p>
      <p className="xheight-note">2. middle 指的是基线往上 1/2 x-height 高度</p>
      <p className="xheight-note">3. middle 并不是绝对的垂直居中对齐，只是一种近似效果（不同字体在行内盒子中的位置是一样的）</p>

      <div className="x-height-box-container">
        <span className="x-height-box">
          <span className="xhtb-text">Sphinx</span>
        </span>

        <span className="x-height-top">
          <i line-type="top"></i>
        </span>
        <span className="x-height-text-top">
          <i line-type="text-top"></i>
        </span>
        <span className="x-height-median">
          <i line-type="median"></i>
        </span>
        <span className="x-height-middle">
          <i line-type="middle"></i>
        </span>
        <span className="x-height-x-height">
          <i line-type="x-height"></i>
        </span>
        <span className="x-height-baseline">
          <i line-type="baseline"></i>
        </span>
        <span className="x-height-text-bottom">
          <i line-type="text-bottom"></i>
        </span>
        <span className="x-height-bottom">
          <i line-type="bottom"></i>
        </span>
      </div>
    </div>
  }
}
