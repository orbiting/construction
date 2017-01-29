const express = require('express')
const next = require('next')
require('dotenv').config()

const DEV = process.env.NODE_ENV !== 'production'
const PORT = 4000

const app = next({dir: '.', dev: DEV})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(require('body-parser').json())
  server.use('/api', require('./server/routes/api'))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${PORT}`)
  })
})
