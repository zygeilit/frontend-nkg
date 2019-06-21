import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routers from '../routes'

// 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 特有内容的过程
ReactDOM.hydrate(
  <BrowserRouter>
    { routers.map(route => <Route {...route}></Route>) }
  </BrowserRouter>,
  document.getElementById('root')
)
