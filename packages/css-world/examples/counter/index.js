
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render() {
    return <div className="counter-container">
      <p className="counter-note">https://www.zhangxinxu.com/wordpress/2014/08/css-counters-automatic-number-content/comment-page-1/#comment-391253</p>
      <p className="counter-note">1. counter + content + :before/:after 实现计数器，主要应用于需要计数的场景。如：购物车计数、广告Slide，等</p>
      <p className="counter-note">2. 计数器依赖DOM的顺序渲染</p>

      <p className="counter-note">## 一般计数器</p>
      <div className="counter-1">
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
      </div>

      <p className="counter-note">## 调整计数器样式 counter(name, lower-roman)</p>
      <div className="counter-2">
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
        <i className="counter"></i>
      </div>

      <p className="counter-note">## 嵌套计数器</p>
      <div className="counter-3">
        <i className="counter">
          <i className="reset">
            <i className="counter"></i>
            <i className="counter"></i>
          </i>
        </i>
        <i className="counter"></i>
        <i className="counter">
          <i className="reset">
            <i className="counter"></i>
            <i className="counter">
              <i className="reset">
                <i className="counter"></i>
              </i>
            </i>
            <i className="counter"></i>
          </i>
        </i>
        <i className="counter"></i>
      </div>
    </div>
  }
}
