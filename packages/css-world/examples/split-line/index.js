
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="split-line-container">
      <p className="split-line-note">1. 使用 padding 实现高度可定制的分隔符，第一种是使用border实现的，第二种是padding + :before</p>

      <div className="split-line-1">
        <div className="split">登录</div>
        <div className="split">注册</div>
      </div>

      <div className="split-line-2">
        <div className="split">登录</div>
        <div className="split">注册</div>
      </div>
    </div>
  }
}
