
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {

  render () {
    return <div className="textarea-bottom-shadow-container">
      <p className="tbsc-note">1. 有滚动条并且未滑动到底部时 Textarea 底部有阴影（问题：滑动较慢时底部有留白）</p>

      <div className="tbsc-box">
        <div className="tbsc-box-edit">
          文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
         文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.文本内容.
            文本内容.文本内容.文本内容.
          <div className="shadow-bottom-bar"></div>
        </div>
        <div className="shadow-bottom-bar"></div>
      </div>
    </div>
  }
}
