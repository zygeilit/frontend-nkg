
import React, { Component } from 'react'
import BST from './binary-search-tree'

export default class extends Component {

  componentDidMount() {

    let items = []

    // 数组中加入1w个元素
    for(let i=0; i<10000; i++) {
      items.push(Math.floor((Math.random()*10000) + 1))
    }

    console.log(`数组长度：` + items.length)

    const bst = new BST()
    
    for(let i=0; i<items.length; i++) {
      bst.add(items[i])
    }
    
    console.log(`使用 contains() 函数查找节点是否存在：` + items[500])
    bst.contains(items[500])

    console.log(`二分查找树，中序遍历，排序：`)
    // bst.inOrder()
  }

  render () {
    return <div>
      <div>二分查找树分析，见开发者工具 -> 控制台</div>
    </div>
  }
}
