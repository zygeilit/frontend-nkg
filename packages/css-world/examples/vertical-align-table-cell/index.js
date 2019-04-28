
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="vertical-align-table-cell">
      <p className="vantl-note">1. vertical-align 起作用的是 table-cell 元素自身</p>
      
      <div className="vantl-box">
        <img src="http://www.hinews.cn/pic/0/10/46/63/10466303_629389.jpg" />
      </div>

      <br/>

      <div className="vantl-box-1">
        <img src="http://www.hinews.cn/pic/0/10/46/63/10466303_629389.jpg" />
      </div>
    </div>
  }
}
