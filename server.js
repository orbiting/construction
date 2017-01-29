const express = require('express')
const next = require('next')
require('dotenv').config()

// connect to mongo and load models
const mongoose = require('./server/models').connect(process.env.MONGO_URL)

const DEV = process.env.NODE_ENV !== 'production'
const PORT = 4000

const app = next({dir: '.', dev: DEV})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(require('body-parser').json())
  server.use('/api', require('./server/routes/api'))

  server.get('/media.html', (req, res) => {
    res.redirect(301, '/media/2017-01-10-hotel-rothaus');
  })
  server.get('/newsletter.html', (req, res) => {
    res.redirect(301, '/newsletter/2017-01-10-hotel-rothaus');
  })
  server.get('/welcome_aboard.html', (req, res) => {
    res.redirect(301, '/newsletter/welcome');
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${PORT}`)
  })
})
