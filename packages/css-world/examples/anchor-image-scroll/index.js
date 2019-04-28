
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="anchor-image-scroll-container">
      <p className="aisb-note">使用 anchor 实现广告滚动切换的效果</p>
      <p className="aisb-note">1. 锚点触发行为的条件：1. URL中的锚链；2. 可 foucs 的元素</p>
      <p className="aisb-note">2. 元素设置了 overflow:hidden，里面高度溢出后，滚动依然存在，仅仅滚动条不存在了</p>
      <p className="aisb-note">3. anchor 是由内而外的触发窗体的重定位，会造成页面的跳动</p>
      <p className="aisb-note">4. 使用隐藏的 input 代替 anchor 实现近似的高度定位，从而实现滚动效果</p>

      <p className="aisb-note aisb-note-scope">anchor 实现滚动效果</p>
      <div className="anchor-image-scroll">
        <div className="anchor-image-scroll-boxes">
          <div className="aisb-item" id="one">1</div>
          <div className="aisb-item" id="two">2</div>
          <div className="aisb-item" id="three">3</div>
          <div className="aisb-item" id="four">4</div>
        </div>
        <div className="anchor-image-scroll-links">
          <a href="#one">1</a>
          <a href="#two">2</a>
          <a href="#three">3</a>
          <a href="#four">4</a>
        </div>
      </div>

      <p className="aisb-note aisb-note-scope">隐藏的 input 实现滚动效果</p>
      <div className="anchor-image-scroll-1">
        <div className="anchor-image-scroll-boxes">
          <div className="aisb-item">
            1
            <input type="text" id="one2"/>
          </div>
          <div className="aisb-item">
            2
            <input type="text" id="two2"/>
          </div>
          <div className="aisb-item">
            3
            <input type="text" id="three2"/>
          </div>
          <div className="aisb-item">
            4
            <input type="text" id="four2"/>
          </div>
        </div>
        <div className="anchor-image-scroll-links">
          <label for="one2">1</label>
          <label for="two2">2</label>
          <label for="three2">3</label>
          <label for="four2">4</label>
        </div>
      </div>
    </div>
  }
}
