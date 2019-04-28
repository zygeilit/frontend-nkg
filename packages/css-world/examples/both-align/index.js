
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="both-align-container">
      <p className="balnc-note">1. 使用负值的 margin 增加可用宽度, 去掉最后一个子块右侧（margin-right: 20px）的空白</p>
      <p className="balnc-note">2. margin 是作用于外部的属性，需要外部多添加一个div</p>

      <div className="both-align-wrapper">
        <ul className="both-align">
          <li className="both-align-block">n</li>
          <li className="both-align-block">i</li>
          <li className="both-align-block">l</li>
        </ul>
      </div>
    </div>
  }
}
