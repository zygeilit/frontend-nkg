
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="border-column-auto-height-container">
      <p className="bcat-note">利用 border + -margin 实现等高多列布局</p>

      <div className="border-column-auto-height">
        <div className="bcat-nav">
          <li>导航1</li>
          <li>导航2</li>
        </div>
        <div className="bcat-section">
          模块1
        </div>
      </div>
    </div>
  }
}
