
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="baseline-beyond-height-container">

      <p className="blbh-note">line-height 相同，font-size 不一致情况下，vertical-align 不同类型的居中会导致盒高度增加</p>
      <div className="baseline-beyond-height">
        <span>x</span>
        <span className="blbh-large">文字x</span>
      </div>
      <br/>

      <p className="blbh-note blbh-note-top">确保 "文字大小一致" 可以解决高度增加问题</p>
      <div className="baseline-beyond-height-1">
        <span>x</span>
        <span className="blbh-large">文字x</span>
      </div>

      <p className="blbh-note blbh-note-top">"vercital-align:top" 可以解决高度增加问题</p>
      <div className="baseline-beyond-height-2">
        <span>x</span>
        <span className="blbh-large">文字x</span>
      </div>
    </div>
  }
}
