
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="trapezoid-container">
      <p className="triangle-note">1. 边框足够大时可以见看到边框的对接处是有斜度的，可以实现三角以及梯形</p>
      <p className="triangle-note">2. 设置容器宽度可实现梯形</p>
      <p className="triangle-note">3. 设置不同的变宽宽度可变换斜边</p>

      <div className="trapezoid-1"></div>
      <div className="trapezoid-2"></div>
    </div>
  }
}
