
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="beyond-important">
    	<p>超越 !important max-* 属性的权限大于 !important</p>
    	<span className="beoi-content">
    		width: 500px !important; <br/>
    		max-width: 300px;
    	</span>
    	<p>超越最大： min-* 权限又大于 max-*</p>
    </div>
  }
}
