
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="position-absolute-text-align-container">
      <p className="pnatan-note">text-align 可以改变 absolute 的位置</p>
      <p className="pnatan-note">1. img前面，容器内部存在一个宽度为0、看不见摸不着的 “空白幽灵节点”，受 text-align:center 的影响</p>
      <p className="pnatan-note">2. img设置了 position:absolute 表现为 “无依赖绝对定位”，“空白幽灵节点” 后面显示</p>
      <p className="pnatan-note">3. img 上 margin-left 50%，可以实现水平居中，不需要改变父元素定位属性，避免不必要出现的层级问题</p>

      <div className="position-absolute-text-align">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549937191&di=3058920409d90bf7a7609a736c04812c&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3727b8798c868fd932e21a703cdae185e619e043.jpg" />
      </div>

      <div className="position-absolute-text-align-1">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549937191&di=3058920409d90bf7a7609a736c04812c&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3727b8798c868fd932e21a703cdae185e619e043.jpg" />
      </div>
    </div>
  }
}
