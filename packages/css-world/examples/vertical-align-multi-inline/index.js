
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="vertical-align-multi-inline-container">
      <p className="vtlami-note">1. 使用 line-height + vertical-align 实现内部 inline 元素垂直居中</p>
      <p className="vtlami-note">2. 使用 text-align 实现内部 inline 元素水平居中</p>
      <p className="vtlami-note">3. 内部元素设置 line-height 设置文本行高</p>

      <div className="vertical-align-multi-inline">
        <p>
          这是一个很长的文本这是一个很长的文本这是一个很长的
          文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的
          文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本这是一个很长的文本
        </p>
      </div>
    </div>
  }
}
