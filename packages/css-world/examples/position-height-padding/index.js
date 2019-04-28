
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div>
      <p>高度100%需要依赖服容器有明确的高度指定</p>
      <p>正常文档流下高度100%是基于 content box</p>
      <p>相对对位下的高度是基于 content box</p>
      <p>绝对对位下的高度是基于 padding box</p>

      <div className="position-heigh-padding">
        <div className="phpg-top-container">
          <div className="phpg-content"></div>
        </div>

        <div className="phpg-line"></div>

        <div className="phpg-middle-container">
          <div className="phpg-content"></div>
        </div>

        <div className="phpg-line"></div>

        <div className="phpg-bottom-container">
          <div className="phpg-content"></div>
        </div>

        </div>
    </div>
  }
}
