
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="containing-block-container">
      <p className="cinb-note">提示框的最大宽度是 “包含块” 的宽度；使用 white-space:nowarp; 解决</p>

      <div className="containing-block">
        <span className="cinb-tip" tip="我是提示框内容，我是提示框内容，我是提示框内容">删除</span>
      </div>

      <div className="containing-block-1">
        <span className="cinb-tip" tip="我是提示框内容，我是提示框内容，我是提示框内容">删除</span>
      </div>
    </div>
  }
}
