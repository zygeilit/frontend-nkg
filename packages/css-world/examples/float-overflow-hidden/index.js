
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="float-overflow-hidden-container">
      <p className="ftoh-note">1. BFC 元素的子元素不会受外部元素影响</p>
      <p className="ftoh-note">2. overflow:hidden 产生的 BFC 元素，为了不和浮动元素产生任何交集，会顺着浮动元素边缘形成自己的封闭上下文</p>
      <p className="ftoh-note">3. block 盒子 + overflow:hidden 属性</p>

      <div className="ftoh-box">
        <img src="http://img2.imgtn.bdimg.com/it/u=119580128,3466587684&fm=26&gp=0.jpg" />
        <p className="ftoh-box-content">
          我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。
          我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。我是一段很长的内容。
        </p>
      </div>
    </div>
  }
}
