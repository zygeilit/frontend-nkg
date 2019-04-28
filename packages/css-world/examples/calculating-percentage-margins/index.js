
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="calculating-percentage-margins">
      <p className="capm-note">统一性：margin简写中，如果 top、bottom 和 left、right分别基于不同值，效果会有所不同</p>
      <p className="capm-note">循环依赖/及联计算：计算宽度不依赖内部子元素，如果基于height，则会出现高度重新计算后margin发生变化；获取容器的高度有需要依赖内部元素的margins</p>
      <p className="capm-note">https://www.hongkiat.com/blog/calculate-css-percentage-margins/</p>

      <div className="calculating-percentage-margins-content">
        How Do You Calculate Percentage Margins
      </div>
    </div>
  }
}
