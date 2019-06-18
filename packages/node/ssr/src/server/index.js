
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routers from '../routes'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {

  const content = renderToString((
    <StaticRouter location={req.path} content={{}}>
      {routers}
    </StaticRouter>
  ))

  res.send(`
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `)
})

app.listen(3000)
