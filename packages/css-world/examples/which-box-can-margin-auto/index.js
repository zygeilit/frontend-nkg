
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="which-box-can-margin-auto-container">
      <p className="ma-note">1. 只有block盒子才可以实现水平居中，必须有指定宽度（否则会横向充满）</p>

      <div className="ma-row">
        <div className="ma-block">display:block</div>
      </div>
      <div className="ma-row">
        <div className="ma-block ma-no-width">display:block; <span style={{ color: 'red' }}>width: auto;</span></div>
      </div>
      <div className="ma-row">
        <div className="ma-inline">display:inline</div>
      </div>
      <div className="ma-row">
        <div className="ma-inline-block">display:inline-block</div>
      </div>
      <div className="ma-row">
        <div className="ma-table">display:table</div>
      </div>
      <div className="ma-row">
        <div className="ma-inline-table">display:inline-table</div>
      </div>
      <div className="ma-row">
        <div className="ma-list-item">display:list-item</div>
      </div>
    </div>
  }
}
