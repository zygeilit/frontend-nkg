
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="vercital-align-px">
      <p className="vanpx-note">1. vertical-align 使用 px 值，避免使用 CSS hack，并支持低版本浏览器</p>
      
      <span>我是一个下拉框</span>
      <span className="vanpx-icon"></span>
    </div>
  }
}
