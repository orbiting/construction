const mongoose = require('mongoose')

const Subscriber = new mongoose.Schema({
  email: String,
  isValidated: Boolean,
  validationToken: String,
  lang: String,
  list: String,
  createdAt: Date
})

Subscriber.pre('save', function saveHook(next) {
  this.createdAt = new Date();
  next();
})


module.exports = mongoose.model('Subscriber', Subscriber)
