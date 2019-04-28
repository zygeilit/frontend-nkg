
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="outline-container">
      <p className="otec-note">不影响布局的 outline</p>
      <p className="otec-note">镂空效果 outline + overflow:hidden </p>

      <div className="outline-box">
        <div className="otec-area"></div>
        <img src="https://demo.cssworld.cn/images/common/m/1.jpg" />
      </div>
    </div>
  }
}
