
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="tlt-rgm-justify">
      <p className="tltjb-note">1. 使用 contnet 属性配合实现子元素对其</p>
      <p className="tltjb-note">2. 使用 text-align:justify 实现子元素均分空白</p>
      <p className="tltjb-note">3. 子元素必须在html用空白间隔，可显示使用 &nbsp; 在 JSX 中定义空白</p>

      <div className="tlt-rgm-justify-box">
        <span className="tlt-rgm-justify-box-bar" style={{ height: 100 }}></span>&nbsp;
        <span className="tlt-rgm-justify-box-bar" style={{ height: 25 }}></span>&nbsp;
        <span className="tlt-rgm-justify-box-bar" style={{ height: 130 }}></span>&nbsp;
        <span className="tlt-rgm-justify-box-bar" style={{ height: 40 }}></span>&nbsp;
        <span className="tlt-rgm-justify-box-bar" style={{ height: 50 }}></span>
      </div>

      <div className="tlt-rgm-justify-box">
        <i className="tlt-rgm-justify-box-bar" style={{ height: 100 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 25 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 130 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 25 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 130 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 40 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 47 }}></i>&nbsp;
        <i className="tlt-rgm-justify-box-bar" style={{ height: 50 }}></i>
      </div>
    </div>
  }
}
