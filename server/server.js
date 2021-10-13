import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'

const PORT = 8000
const app = express()
const rootFolder = 'dist'

app.use('^/$', (req, res, next) => {
  fs.readFile(`./${rootFolder}/index.html`, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('error')
    }
    return res.send(data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
      ))
    // return res.send(data)
  })
})

app.use(express.static(path.resolve(__dirname, '..', rootFolder), ))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`)
})