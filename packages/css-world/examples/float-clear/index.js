
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="float-clear-container">

      <div className="clear margin-bottom"></div>
      
      <div className="float-clear-box" num="1">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>

      <div className="clear margin-bottom line"></div>

      <div className="float-clear-box-1" num="2">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549937191&di=3058920409d90bf7a7609a736c04812c&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3727b8798c868fd932e21a703cdae185e619e043.jpg" />
        <div className="fcb1-text-content">
          小猫1明，小猫2，小猫3，小猫4，...
        </div>
      </div>

      <div className="clear margin-bottom line"></div>

      <div className="float-clear-box-2" num="3">
        <img src="http://img2.imgtn.bdimg.com/it/u=119580128,3466587684&fm=26&gp=0.jpg" />
        <div className="fcb1-text-content">
          小猫1明，小猫2，
          <span className="clear"></span>
          小猫3，小猫4，...
        </div>
      </div>

      <div className="clear margin-bottom line"></div>

      <div className="float-clear-box-3" num="4">
        <div className="fcrb-box clear">
          <img src="http://img4.imgtn.bdimg.com/it/u=3151403010,3809248238&fm=26&gp=0.jpg" />
          我是帅哥，你是傻子，你是憨包子。
          <span className="clear"></span>
          我是帅哥，你是傻子，你是憨包子。我是帅哥，你是傻子，你是憨包子。
        </div>
      </div>

      <div className="clear margin-bottom line"></div>

      <div className="float-clear-box-4" num="5">
        <div className="fcrb-box clear">
          <img src="http://img1.imgtn.bdimg.com/it/u=2235701421,1091057440&fm=15&gp=0.jpg" />
          我是帅哥，你是傻子，你是憨包子。我是帅哥，你是傻子，你是憨包子。我是帅哥，你是傻子，你是憨包子。
        </div>
        <div className="fcb1-text-content">
          小猫1明，小猫2，小猫3，小猫4，...
        </div>
      </div>

      <div className="clear margin-bottom line"></div>

      <div className="float-clear-box-5" num="6">
        <div className="fcrb-box clear">
          <img src="http://img4.imgtn.bdimg.com/it/u=3151403010,3809248238&fm=26&gp=0.jpg" />
          <div className="fcb1-text-content">
            我是帅哥，你是傻子，你是憨包子。
            <span className="clear"></span>
            我是帅哥，你是傻子，你是憨包子。我是帅哥，你是傻子，你是憨包子。
          </div>
        </div>
      </div>

      <div className="clear margin-bottom line"></div>
    </div>
  }
}
