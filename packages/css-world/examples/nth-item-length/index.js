
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="nth-item-length-container">
      <p className="nthlg-note nthlg-note-large">选择固定数量的节点</p>
      <p className="nthlg-note">1. :first-child:nth-last-child(n) 表示第一个子元素也是倒数第n个子元素，可用于判断有多少个子元素</p>
      <p className="nthlg-note">2. :only-child == :first-child:last-child</p>

      <div className="nth-item-boxes">
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
      </div>

      <p className="nthlg-note nthlg-note-large">选择大于指定数量的节点</p>
      <p className="nthlg-note">1. :nth-child(n+1) 范围选择器可以选择大于指定范围内的节点</p>

      <div className="nth-item-boxes-large">
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
      </div>

      <p className="nthlg-note nthlg-note-large">选择小于指定数量的节点</p>
      <p className="nthlg-note">1. :nth-child(-n+1) 范围选择器可以选择小于指定范围内的节点</p>

      <div className="nth-item-boxes-min">
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
      </div>

      <p className="nthlg-note nthlg-note-large">选择区间范围之内的指定数量的节点</p>
      <p className="nthlg-note">1. 当列表中包含 2~8 个项时选中所有项</p>

      <div className="nth-item-boxes-scope">
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
        <div className="nthlg-box"></div>
      </div>
    </div>
  }
}
