
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="holy-grail-layout-flex-pc">
      <p className="hglf-note">
        三列布局目标：
        <p>1. 两边固定宽度，中间列随浏览器宽度自适应</p>
        <p>2. 中间列首先出现在HTML</p>
        <p>3. 三列同高</p>
        <p>4. They should require minimal markup</p>
        <p>5. Footer固定在底部</p>
      </p>

      <p className="hglf-note">
        问题：
        <p>1. 浏览器兼容性</p>
      </p>

      <div className="holy-grail-header">Header</div>
      <div className="holy-grail-container">
			  <div className="holy-grail-column holy-grail-center"></div>
			  <div className="holy-grail-column holy-grail-left"></div>
			  <div className="holy-grail-column holy-grail-right"></div>
			</div>
			<div className="holy-grail-footer">Footer</div>
    </div>
  }
}
