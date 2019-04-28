
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="stacking-container">
      <p className="stacking-note">CSS 中的层叠，两个概念：1. 层叠上下文；2. 层叠水平；一个规则：“层叠顺序“</p>
      <p className="stacking-note">“层叠上下文”是独立的单元，所有元素都有 “层叠水平” 包括层叠上下文元素</p>
      <p className="stacking-note">“层叠顺序“ 是规则，如下：</p>

      <div className="stacking-orider">
        <div className="orider-box" content="background/border">
          <div className="orider-box" content="负z-index">
            <div className="orider-box" content="block块状水平盒子">
              <div className="orider-box" content="float水平盒子">
                <div className="orider-box" content="inline水平盒子">
                  <div className="orider-box" content="z-index:[auto|0] 以及不依赖的 z-index 层叠上下文">
                    <div className="orider-box" content="正z-index"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="stacking-note" style={{ marginTop: 280 }}>“层叠顺序“ 准则：1. 谁大谁上 2. 后来者局上</p>
      <p className="stacking-note">如何创建 “层叠上下文“：</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>1. 根元素(html)</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>2. 定位元素与传统层叠上下文</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>a. position: [relative|absolute]，以及Firefox/IE下 fixed 的元素中，当 z-index 值不是 auto</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>3. CSS3属性</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>a. opacity 值不是 1</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>b. transform 值不是 none</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>c. mix-blend-mode 值不是 normal</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>d. filter 值不是 none</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>e. isolation 值不是 isolate</p>
      <p className="stacking-note" style={{ marginLeft: 40 }}>f. will-change 值为上6个中任意一个</p>

      <p className="stacking-note">层叠上下文元素和定位元素是一个层叠顺序，当它们发成层叠时，遵循的是 “后来居上” 准则，如：</p>
      <pre>
        1. img style="position:relative"
        2. img style="transform:scale(1)"
      </pre>

      <p className="stacking-note">z-index 为负值时，依然无法突破当前层叠上下。作用如下：</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>1. 可访问性隐藏</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>2. IE8下的多背景模拟</p>

      <div className="stacking-box-multi-background-image-ie8">
        IE8下的多背景模拟
      </div>
      <p className="stacking-note" style={{ marginLeft: 20, fontSize: 12 }}>（z-index:0 创建层叠上下文，伪元素是子元素，根据 “层叠规则” background 位于 -z-index 后）</p>

      <p className="stacking-note" style={{ marginLeft: 20 }}>3. 定位在元素的后面</p>

      <div className="stacking-box-page-radius">
        <div className="sgbpr-page">纸张边角卷起来的阴影</div>
      </div>
      <p className="stacking-note" style={{ marginLeft: 20, marginTop: 20, fontSize: 12 }}>（position:relative 创建层叠上下文，伪元素是子元素，根据 “层叠规则” background 位于 -z-index 后）</p>

      <p className="stacking-note">z-index “不犯二” 准则</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>1. 对于非浮层元素，避免设置 z-index 值，没有任何理由需要超过 2</p>
      <p className="stacking-note">z-index 风险</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>1. 巨大的 z-index 值也无法覆盖其他元素的问题</p>
      <p className="stacking-note" style={{ marginLeft: 20 }}>2. 避免 “一山比一山高” 的样式混乱问题</p>
      <p className="stacking-note">“不犯二” 准则不包括弹窗、错误提示、下拉等，这类可使用 Javascript “层级计数器” 来管理</p>
      <p className="stacking-note">z-index 最大建议 9</p>
    </div>
  }
}
