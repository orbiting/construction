var nodemailer = require('nodemailer')
module.exports = nodemailer.createTransport(process.env.MAIL_URL)
