
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="position-absolute-overflow-container">
      <p className="paoc-note">如果 overflow 不是定位元素，同时绝对定位元素和 overflow 容器之间页没有定位元素，则 overflow 无法对 absolute 元素进行裁剪</p>

      <div className="position-absolute-overflow">
        <img src="https://image-static.segmentfault.com/689/689/689689488-5b8ccb3b63db6_articlex" />
      </div>

      <p className="paoc-note" style={{ marginTop: 220 }}>如果 overflow 属性所在的元素同时也是定位元素，里面的绝对定位元素会被裁减</p>
      <div className="position-absolute-overflow-1">
        <img src="https://image-static.segmentfault.com/689/689/689689488-5b8ccb3b63db6_articlex" />
      </div>

      <p className="paoc-note" style={{ marginTop: 60 }}>如果 overflow 元素和绝对定位元素之间（父节点，非兄弟节点）有定位元素，absolute 元素会被裁减</p>
      <div className="position-absolute-overflow-2">
        <span style={{ position: 'relative' }}>
          <img src="https://image-static.segmentfault.com/689/689/689689488-5b8ccb3b63db6_articlex" />
        </span>
      </div>

      <p className="paoc-note" style={{ marginTop: 60 }}>当容器滚动的时候，绝对定位元素纹丝不动，不跟着滚动，表现类似 fixed 固定定位</p>
      <div className="position-absolute-overflow-3">
        <img src="https://image-static.segmentfault.com/689/689/689689488-5b8ccb3b63db6_articlex" />
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
        我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。我是很长的文本内容。
      </div>
    </div>
  }
}
