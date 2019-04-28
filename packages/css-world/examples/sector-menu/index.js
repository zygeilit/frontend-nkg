
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

export default class extends Component {
  render () {
    return <div className="sector-menu-container">
      <SectorMenu items={[
        {
          label: '菜单',
          backgroundColor: '#fb453d',
          items: [
            {
              label: '首页',
              backgroundColor: '#c8c8c8',
              items: [
                {
                  label: '卡片',
                  backgroundColor: '#9e9d9d',
                },
                {
                  label: '列表',
                  backgroundColor: '#848282',
                }    
              ]
            },
            {
              label: '服务',
              backgroundColor: '#b1b1b1',
              items: [
                {
                  label: '手机',
                  backgroundColor: '#9e9d9d',
                },
                {
                  label: '邮箱',
                  backgroundColor: '#848282',
                },
                {
                  label: 'QQ',
                  backgroundColor: '#636161',
                },
              ]
            },
            {
              label: '联系',
              backgroundColor: '#989696',
            },
            {
              label: '商店',
              backgroundColor: '#7f7e7e',
            },
            {
              label: '帮助',
              backgroundColor: '#716f6f',
            },
            {
              label: '技术服务',
              backgroundColor: '#636161',
            }
          ]
        },
      ]}/>
    </div>
  }
}

class SectorMenu extends Component {
  render () {
    return <div className="sector-menu">
      <SectorMenuList items={ this.props.items } />
    </div>
  }
}

class SectorMenuList extends Component {

  onMouseEnterHandler (i, currentDegree) {
    let { level = 1 } = this.props
    let childItemsContainer = ReactDOM.findDOMNode(this.refs[`child${i}`])
    childItemsContainer ? childItemsContainer.style.transform = `rotate(${ 0 - currentDegree }deg) translateZ(${level * -1}px)` : null
  }

  onMouseLeave (i) {
    let { level = 1 } = this.props
    let childItemsContainer = ReactDOM.findDOMNode(this.refs[`child${i}`])
    childItemsContainer ? childItemsContainer.style.transform = `rotate(${ 90 }deg) translateZ(${level * -1}px)` : null
  }
  
  render () {
    let { level = 1, items } = this.props
    let { width = 100, height = 100 } = {}

    return <ul
        className="sector-menu-list"
        style={{
          'height': height * level,
          'width': width * level,
          'transform': `rotate(${ (level == 1) ? 0 : 90 }deg) translateZ(${ level * -1 }px)`,
        }}
      >
      {
        items.map((item, i) => {
          return [
            <li
              key={ i }
              className="sector-menu-list-item"
              style={{
                'transform': `rotate(${ i * (90 / items.length) }deg)`,
                'borderRadius': `0 0 ${ width * level }px 0`,
                'backgroundColor': item.backgroundColor
              }}
              label={ item.label }
              onMouseEnter={ () => { this.onMouseEnterHandler(i, i * (90 / items.length)) } }
              onMouseLeave={ () => { this.onMouseLeave(i) } }
            >
              { item.label }
              {
                item.items ?
                <SectorMenuList
                  key={ `child-${i}` }
                  items={ item.items }
                  level={ level + 1 }
                  ref={`child${i}`}
                /> : null
              }
            </li>,
          ]
        })
      }
    </ul>
  }
}
