
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="triangle-container">
      <p className="triangle-note">1. 边框足够大时可以见看到边框的对接处是有斜度的，可以实现三角以及梯形</p>
      <p className="triangle-note">2. 4个边框需要设置同样的宽度，否则为图3</p>

      <div className="triangle-1"></div>
      <div className="triangle-2"></div>
      <div className="triangle-3"></div>
    </div>
  }
}
