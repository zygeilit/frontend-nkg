
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="margin-merge-container">
      <p className="mmcr-note">margin合并，会在哪几种情况下产生：</p>

      <p className="mmcr-note mmcr-top">1. 上下间距50px，合并取最大的值</p>
      <div className="margin-merge-1">
        <div className="mme-1">A: margin-bottom: 50px;</div>
        <div className="mme-2">B: margin-top: 20px;</div>
      </div>

      <p className="mmcr-note mmcr-top">2. 外层如同设置了50px，取绝对最大的值</p>
      <div className="margin-merge-2">
        <div className="mme-1">
          <div className="mme-2">Son</div>
        </div>
      </div>

      <p className="mmcr-note mmcr-top">3. 内容为空时，外部尺寸时最大的那个值</p>
      <div className="margin-merge-3">
        <div className="mme-1"></div>
      </div>

      <p className="mmcr-note mmcr-top">4. 上下间距有负值时，则为两边距相加 50 - 30 = 20px</p>
      <div className="margin-merge-4">
        <div className="mme-1">A</div>
        <div className="mme-2">B</div>
      </div>

      <p className="mmcr-note mmcr-top">5. 外部容器无内容、有负值的情况下，margin 计算值为两值相加 50 - 20 = 30px</p>
      <div className="margin-merge-5">
        <div className="mme-1">
          <div className="mme-2">Son</div>
        </div>
      </div>

      <p className="mmcr-note mmcr-top">6. 盒无内容、上下 margin 值中存在有负值情况时，值为 margin 之和 50 - 40 = 10px</p>
      <div className="margin-merge-6">
        <div className="mme-1"></div>
      </div>

      <p className="mmcr-note mmcr-top">7. 相邻兄弟节点 margin 设置负值时，两盒之间间距取负取最大值</p>
      <div className="margin-merge-7">
        <div className="mme-1"></div>
        <div className="mme-2"></div>
      </div>

      <p className="mmcr-note mmcr-top">8. 父子节点同时设置了负值 margin，则父节点取负 margin 最大值</p>
      <div className="margin-merge-8">
        <div className="mme-1">
          <div className="mme-2"></div>
        </div>
      </div>

      <p className="mmcr-note mmcr-top">9. 单独节点同时设置了，上下边距负值时，外部尺寸为负最大值</p>
      <div className="margin-merge-9">
        <div className="mme-1"></div>
      </div>

    </div>
  }
}
