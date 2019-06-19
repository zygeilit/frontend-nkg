
import express from 'express'
import React from 'react'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { renderToString } from 'react-dom/server'

import App from '../app'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {

  // 获取所有组件的CSS
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <App/>
    </StyleContext.Provider>
  )

  console.log(css)

  res.send(`
    <html>
      <head>
        <title>SSR</title>
        <style type="text/css">${[...css].join('\n')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000)
