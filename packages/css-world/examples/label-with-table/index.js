
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="lw-content">
      <p className="lw-note">使用 display: table|row|cell 实现第一列宽度跟随内部节点最大宽度适应</p>
      <p className="lw-note" style={{ 'marginBottom': 30 }}>css源代码见：
        <a href="https://github.com/zygeilit/css-world/blob/master/examples/label-with-table/index.scss">https://github.com/zygeilit/css-world/blob/master/examples/label-with-table/index.scss</a>
      </p>

      <div className="lw-table">
        <div className="lw-row">
        	<div className="lw-column lw-column-lable">
            <span className="lwc-lable">文案文案文案</span>
          </div>
        	<div className="lw-column lw-column-value">
            <span className="lw-column-value">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</span>
          </div>
        </div>
        <div className="lw-row">
        	<div className="lw-column lw-column-lable">
            <span className="lwc-lable">文案文案文案文案文案文案</span>
          </div>
        	<div className="lw-column lw-column-value">
            <span className="lwc-value">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</span>
          </div>
        </div>
      </div>
    </div>
  }
}
