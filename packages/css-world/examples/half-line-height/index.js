
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="half-line-height-container">
      <p className="hlht-note">半行距计算公式 （line-height * font-size - font-size）/ 2</p>
      
      <div className="half-line-height">
        <span className="test">English中文</span>
      </div>
    </div>
  }
}
