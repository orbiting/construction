const express = require('express')
const next = require('next')
const newsletter = require('./server/newsletter')
require('dotenv').config()

const DEV = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 4000

const app = next({dir: '.', dev: DEV})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(newsletter)

  server.get('/index.html', (req, res) => {
    res.redirect(301, '/')
  })
  server.get('/media.html', (req, res) => {
    res.redirect(301, '/media/2017-01-10-hotel-rothaus')
  })
  server.get('/newsletter.html', (req, res) => {
    res.redirect(301, '/newsletter/2017-01-10-hotel-rothaus')
  })
  server.get('/welcome_aboard.html', (req, res) => {
    res.redirect(301, '/newsletter/welcome')
  })
  server.get('/newsletter/:slug', (req, res) => {
    return app.render(req, res, '/newsletter', req.params)
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${PORT}`)
  })
})
