
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="content-image">
      <p className="ctig-note">1. content 属性展示图片</p>
      <p className="ctig-note">2. 虽然HTML中的文字被替换了，但是阅读设备、搜索引擎抓取的还是原始文字</p>
      <p className="ctig-note">3. 尺寸无法定义</p>
      <p className="ctig-note">4. content生成的文本，无法选择，类同于 user-select 属性</p>
      <p className="ctig-note">5. content生成的是 “匿名替换元素”</p>

      <h1>nodejs</h1>
    </div>
  }
}
