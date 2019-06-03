
import React, { Component } from 'react'
import BST from './binary-search-tree'

export default class extends Component {

  componentDidMount() {

    let items = [ 1, 123123,12312,4,3423,5,,432,12,3,54,8,9,,45,34,45,678,45,23,123,12,31234,235,3453,46,4567]
    console.log(`数组长度：` + items.length)

    const bst = new BST()
    
    for(let i=0; i<items.length; i++) {
      bst.add(items[i])
    }
    
    console.log(`使用 contains() 函数查找节点是否存在：` + 31234)
    bst.contains(31234)

    console.log(`二分查找树，中序遍历，排序：`)
    bst.inOrder()
  }

  render () {
    return <div>
      <div>二分查找树分析，见开发者工具 -> 控制台</div>
    </div>
  }
}
