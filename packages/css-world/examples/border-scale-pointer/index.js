
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="border-scale-pointer">
      <p className="bspr-note">1. 使用 border 增加点击区域大小</p>
      <p className="bspr-note">2. padding、border 都可以增加点击区域大小，介于图标大部分是用工具生成的，background-position 会限定死，使用 border 可应用性更强一些</p>

      <span className="bspr-input">
        <input />
        <span className="bspr-copy">x</span>
      </span>
    </div>
  }
}
