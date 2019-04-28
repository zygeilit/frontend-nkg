
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {

  alertHandler () {
    alert(1)
  }

  render () {
    return <div className="clip-container">
      <p className="clip-note">1. clip 定义了哪部分可见，但原尺寸不变。在 IE 和 Firefox 浏览器下抹掉了不可见区域</p>
      <p className="clip-note">2. 在隐藏部分区域可响应按钮事件</p>

      <img src="http://www.49363.com/uploads/allimg/170707/1450242L4-0.jpg?size=640x330" />
      <input type="button" value="alert" onClick={ this.alertHandler.bind(this) } />
    </div>
  }
}
