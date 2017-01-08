const express = require('express')
const bodyParser = require('body-parser')
const fallback = require('express-history-api-fallback')
require('dotenv').config()

// connect to mongo and load models
const mongoose = require('./models').connect(process.env.MONGO_URL)

const PORT = 4000
const app = express()

var clientBuild = __dirname+'/../build/'
app.use(express.static(clientBuild))
app.use(express.static(__dirname+'/../public/'))
app.use(require('body-parser').json())

// api routes
app.use('/api', require('./routes/api'))

//use fallback to make client side routes work
app.use(fallback('index.html', { root: clientBuild }))

app.listen(PORT, () => {
  console.log(`Construction listening on port ${PORT}!`)
})
