
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="float-container">
    	<div className="float-element">我是浮动元素</div>
      <span className="clear"></span>
    </div>
  }
}
