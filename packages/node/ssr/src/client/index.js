import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../routes' 

const App = () => {
  return (
    <BrowserRouter>{routes}</BrowserRouter>
  )
}

// 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 特有内容的过程
ReactDOM.hydrate(<App />, document.getElementById('root'))
