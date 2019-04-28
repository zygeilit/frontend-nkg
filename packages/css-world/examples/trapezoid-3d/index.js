
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="tranpezoid-3d-container">
      <p className="triangle-note">http://www.alloyteam.com/2012/10/the-css3-transform-perspective-property/</p>
      <p className="triangle-note">1. 使用 css3 属性：perspective、rotateX</p>
      <p className="triangle-note">2. perspective属性设置镜头到元素平面的距离。比如：perspective(300px)表示，镜头距离元素表面的位置是300像素</p>

      <div className="tranpezoid-3d-1">梯形</div>
      <div className="tranpezoid-3d-2">梯形</div>
    </div>
  }
}
