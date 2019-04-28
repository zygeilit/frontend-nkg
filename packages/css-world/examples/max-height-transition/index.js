
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="max-height-transition">
    	<p>height默认值是 auto，无法和 px，% 进行计算</p>
    	<p>动画方案：max-height 比 height 大时，会使用 height 做为高度。否则相反</p>
    	<span className="mhtan-scale-block-maxheight"></span>
    </div>
  }
}
