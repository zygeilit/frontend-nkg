
import express from 'express'
import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import routers from '../routes'

const app = express()

// 设置静态资源获取路径
app.use(express.static('public'))

app.get('*', (req, res) => {

  const context = { 'css': [] }

  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      { routers.map(route => <Route {...route}></Route>) }
    </StaticRouter>
  )

  res.send(`
    <html>
      <head>
        <title>SSR</title>
        <style type="text/css">${[...context.css].join('\n')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000)
