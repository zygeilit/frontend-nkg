
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="margin-auto">
      <p className="mao-note">https://vanseodesign.com/css/vertical-centering/</p>
      <p className="mao-note">https://www.cnblogs.com/coco1s/p/4444383.html</p>
      <p className="mao-note">https://www.hongkiat.com/blog/css-margin-auto/</p>
      <p className="mao-note">float、inline、absolute、fixed 元素无法使用 margin:auto（decided on their layouts）</p>

      <p className="mao-note">1. margin:auto(只有水平居中)</p>
      <div className="margin-auto-normal-block">
        <div className="margin-auto-box"></div>
      </div>

      <p className="mao-note">2. position + tranform(-50%)(兼容性问题)</p>
      <div className="margin-auto-position-transform">
        <span className="margin-auto-box"></span>
      </div>

      <p className="mao-note">3. position + margin:auto</p>
      <div className="margin-auto-position-margin-auto">
        <span className="margin-auto-box"></span>
      </div>

      <p className="mao-note">4. table-cell(需要固定宽度)</p>
      <div className="margin-auto-table-cell">
        <span className="margin-auto-box"></span>
      </div>

      <p className="mao-note">5. flex(兼容性问题)</p>
      <div className="margin-auto-flex">
        <span className="margin-auto-box"></span>
      </div>

      <p className="mao-note">6. floater(依赖浮动元素，把定位元素挤下去)</p>
      <div className="margin-auto-floater">
        <div className="margin-auto-floater-block"></div>
        <span className="margin-auto-box"></span>
      </div>

      <p className="mao-note">7. line-height(如果使用 font 关键词, font-size 会初始化为 1, 需要显示的指定 line-height)</p>
      <div className="margin-auto-line-height">
        margin-auto-box
      </div>

      <p className="mao-note">7.1. line-height image</p>
      <div className="margin-auto-line-height-image">
        <img className="margin-auto-box-image" src="https://image-static.segmentfault.com/689/689/689689488-5b8ccb3b63db6_articlex" />
      </div>

      <p className="mao-note">8. grid</p>
      <div className="margin-auto-grid">
        <span className="margin-auto-box"></span>
      </div>
    </div>
  }
}
