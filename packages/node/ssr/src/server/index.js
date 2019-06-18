
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import MainPage from '../pages/main.js'

const app = express()
app.use(express.static('public'))

const content = renderToString(<MainPage />)

app.get('/', (req, res) => {
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
