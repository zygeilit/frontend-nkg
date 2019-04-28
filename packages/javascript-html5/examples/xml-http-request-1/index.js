
import React, { Component } from 'react'

export default class extends Component {

  state = {
    'content': ''
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 0) {
        // 请求未初始化，还没有调用 open()
        console.log(0)
      } else if (xhr.readyState == 1) {
        // 请求已经建立，但是还没有发送，还没有调用 send()
        console.log(1)
      } else if (xhr.readyState == 2) {
        // 请求已接收，正在处理中（通常现在可以从响应中获取内容头）
        console.log(2)
      } else if (xhr.readyState == 3) {
        // 请求在处理中；通常响应中已有部分数据可用了，没有全部完成
        console.log(3)
      } else if (xhr.readyState == 4 && xhr.status == 200) {
        // 响应已完成；您可以获取并使用服务器的响应了
        console.log(4)
        this.setState({ 'content': xhr.responseText })
      } else {
        console.log(xhr.statusText)
      }
    }

    xhr.open('GET', 'http://cmp.italent.cn/api/v2/components')
    xhr.send()
  }

  render () {
    return <div>
      xmlHttpRequest Level 1
      <br/>
      { this.state.content.slice(0, 3000) }
    </div>
  }
}
