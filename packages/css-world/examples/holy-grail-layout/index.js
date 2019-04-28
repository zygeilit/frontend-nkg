
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="holy-grail-layout">
      <p>https://alistapart.com/article/holygrail</p>

      <p>padding预留出左右边框的位置</p>
      <div className="hglat-only-center">
        <div className="holy-grail-header">Header</div>
        <div className="holy-grail-container">
          <div className="holy-grail-column holy-grail-center">center</div>
        </div>
        <div className="holy-grail-footer">Footer</div>
      </div>

      <p>-margin 让左右边栏进入正确的位置</p>
      <div className="hglat-have-left">
        <div className="holy-grail-header">Header</div>
        <div className="holy-grail-container">
          <div className="holy-grail-column holy-grail-center">center</div>
          <div className="holy-grail-column holy-grail-left">
            width: 150px;
            margin-left: -100%;
            right: 150px;
          </div>
          <div className="holy-grail-column holy-grail-right">
            width: 200px;
            margin-right: -200px;
          </div>
        </div>
        <div className="holy-grail-footer">Footer</div>
      </div>
    </div>
  }
}
