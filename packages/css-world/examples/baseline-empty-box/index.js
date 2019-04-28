
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="baseline-empty-box-container">
      <p className="bley-note">当盒内没有内联元素时，baseline时基于盒的底部边框位置，否则为字母 x 的下边缘</p>

      <p className="bley-note bley-note-pre">1. 相同内联元素样式，第一个无内容</p>
      <div className="baseline-empty-box">
        <span className="bley-box"></span>
        <span className="bley-box">x-baseline</span>
      </div>

      <p className="bley-note bley-note-pre">2. 相同内联元素样式，line-height:0, 第一个无内容</p>
      <div className="baseline-empty-box-1">
        <span className="bley-box"></span>
        <span className="bley-box">x-baseline</span>
      </div>

      <p className="bley-note bley-note-pre">3. 相同内联元素样式，font-size:0, 第一个无内容</p>
      <div className="baseline-empty-box-2">
        <span className="bley-box"></span>
        <span className="bley-box">x-baseline</span>
      </div>

      <p className="bley-note bley-note-pre">4. 相同内联元素样式，第一个有内容：&nbsp</p>
      <div className="baseline-empty-box-3">
        <span className="bley-box">&nbsp;</span>
        <span className="bley-box">x-baseline</span>
      </div>

      <p className="bley-note bley-note-pre">5. 相同内联元素样式，设置了 vertical-align</p>
      <div className="baseline-empty-box-4">
        <span className="bley-box">&nbsp;</span>
        <span className="bley-box">x-baseline</span>
      </div>
    </div>
  }
}
