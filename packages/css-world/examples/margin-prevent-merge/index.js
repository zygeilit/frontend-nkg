
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="margin-prevent-merge-container">

      <p className="mpmcr-note">阻止 margin-top 合并</p>
      <p className="mpmcr-note">1. 父元素设置块状格式化上下文</p>
      <p className="mpmcr-note">2. 父元素块设置 border-top</p>
      <p className="mpmcr-note">3. 父元素块设置 padding-top</p>
      <p className="mpmcr-note">4. 父元素与第一个子元素添加内联元素分割</p>

      <p className="mpmcr-note" style={{ marginTop: 30 }}>阻止 margin-bottom 合并</p>
      <p className="mpmcr-note">1. 父元素设置块状格式化上下文</p>
      <p className="mpmcr-note">2. 父元素块设置 border-bottom</p>
      <p className="mpmcr-note">3. 父元素块设置 padding-bottom</p>
      <p className="mpmcr-note">4. 父元素与第一个子元素添加内联元素分割</p>
      <p className="mpmcr-note">5. 父元素设置 height、min-height、max-height</p>

      <p className="mpmcr-note" style={{ marginTop: 30 }}>阻止空块元素 margin 合并</p>
      <p className="mpmcr-note">1. 垂直方向的 border</p>
      <p className="mpmcr-note">2. 垂直方向的 padding</p>
      <p className="mpmcr-note">3. 添加内联元素</p>
      <p className="mpmcr-note">4. 设置 height、min-height</p>
    </div>
  }
}
