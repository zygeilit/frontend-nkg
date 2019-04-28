
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="position-absolute-dropdown-container">
      <p className="padc-note">无依赖绝对定位</p>
      <p className="padc-note">1. position:absolute; 就实现了下拉搜索框，没有 left、top 定位，没有使用 position:relative; 兼容性达到IE6</p>
      <p className="padc-note">2. 维护成本降低，输入框发生变化后不需要修该任何 CSS 代码，依然完美对齐</p>
      <p className="padc-note">3. 下拉框内容使用 div（换行） 实现，与 input 底边自然对齐；下拉框默认隐藏，input:focus 时显示（search-input:focus ~ .search-result）</p>

      <div style={{ marginTop: 30 }}></div>

      <div className="position-absolute-dropdown">

        <input className="padc-search-input" placeholder="搜索"/>
        <a href="javascript:" className="padc-search-btn"></a>

        <div className="padc-search-result">
          <div className="padc-search-datalist">
            <a href="#">北京</a>
            <a href="#">上海</a>
            <a href="#">山东</a>
            <a href="#">河北</a>
            <a href="#">黑龙江</a>
          </div>
        </div>
      </div>
    </div>
  }
}
