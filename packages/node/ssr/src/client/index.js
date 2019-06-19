import React from 'react'
import ReactDOM from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from '../app' 

const insertCss = (...styles) => {
  console.log(styles)
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

// 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 特有内容的过程
ReactDOM.hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>,
  document.getElementById('root')
)
