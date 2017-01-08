const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

// connect to mongo and load models
const mongoose = require('./models').connect(process.env.MONGO_URL)

const PORT = 4000
const app = express()

app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(require('body-parser').json())

// api routes
app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
  console.log(`Construction listening on port ${PORT}!`)
})
