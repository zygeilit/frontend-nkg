
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="relative-calculated-value">
      <p className="recve-note">CSS 中，凡是百分比值，均是需要一个相对计算的值，如下：</p>
      <p className="recve-note">margin、padding => width</p>
      <p className="recve-note">line-height => font-size</p>
      <p className="recve-note">vertical-align => line-height</p>
    </div>
  }
}
