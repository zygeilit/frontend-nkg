
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="img-content-alt">
      <p className="igct-note">1. 替换元素(img)在src为空的情况下会变成非替换元素，:after与:befor 伪元素均可展现</p>
      <p className="igct-note">2. 使用 content 属性，通过 attr 获取图片提示</p>

      <img className="img-no-src" src="" altd="美女沉思图" />
      <img className="img-have-src" src="http://www.hinews.cn/pic/0/10/46/63/10466303_629389.jpg" altd="美女沉思图" />
    </div>
  }
}
