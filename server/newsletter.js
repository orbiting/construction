const server = require('express').Router()
const bodyParser = require('body-parser')
const fetch = require('isomorphic-unfetch')
const crypto = require('crypto')

const base64u = require('../lib/base64u')

const SUBJECT = 'Bitte Anmeldung Project R-Newsletter bestätigen'
const FROM_EMAIL = 'jefferson@project-r.construction'
const FROM_NAME = 'Jefferson - Project R'

// see NewsletterName graphql enum in republik backend
// - backends/servers/republik/graphql/schema-types.js
NEWSLETTER_NAME = 'PROJECTR'

const {
  NEWSLETTER_HMAC_KEY,
  REPUBLIK_PUBLIC_BASE_URL,
  MANDRILL_API_KEY
} = process.env

const missingEnv = ['NEWSLETTER_HMAC_KEY', 'REPUBLIK_PUBLIC_BASE_URL', 'MANDRILL_API_KEY']
  .filter(key => !process.env[key])

if (missingEnv.length) {
  console.warn(`missing env ${missingEnv.join(', ')}\n - newsletter sign up will not work`)
}

const authenticate = (email, name, subscribed) => {
  if (!NEWSLETTER_HMAC_KEY) {
    console.error('missing NEWSLETTER_HMAC_KEY')
    throw new Error('Newsletter-Anmeldungs-Link-Generation ist fehlgeschlagen.')
  }
  return crypto
    .createHmac('sha256', NEWSLETTER_HMAC_KEY)
    .update(`${email}${name}${+subscribed}`)
    .digest('hex')
}

const subscribeText = (email) => {
  const subscribed = '1'
  return `Guten Tag

Vielen Dank für Ihr Interesse an Project R und der Republik.

Bestätigen Sie Ihre Newsletter-Anmeldung mit folgendem Link:

${REPUBLIK_PUBLIC_BASE_URL}/mitteilung?type=newsletter-subscription&name=${NEWSLETTER_NAME}&subscribed=${subscribed}&email=${base64u.encode(email)}&mac=${authenticate(email, NEWSLETTER_NAME, subscribed)}

Wir freuen uns, Sie in unregelmässigen Abständen über Entwicklungen bei Project R und der Republik zu informieren.

Sie wollen Mitglied der Project R Genossenschaft und Verlegerin der Republik werden? https://www.republik.ch/angebote

Ihre Crew von der Republik und von Project R`
}

const sendEmail = (email, text) => {
  return fetch(`https://mandrillapp.com/api/1.0/messages/send.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key: MANDRILL_API_KEY,
      message: {
        text,
        subject: SUBJECT,
        from_email: FROM_EMAIL,
        from_name: FROM_NAME,
        to: [ {email} ]
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      // we always only send one email address
      if (!data[0] || data[0].status !== 'sent') {
        return {
          message: 'Anmeldung fehlgeschlagen.'
        }
      }
      return {
        success: true,
        message: 'Bitte bestätigen Sie die E-Mail, die wir Ihnen geschickt haben.'
      }
    })
}

server.get('/newsletter/subscribe', bodyParser.json(), async (req, res) => {
  const {email} = req.query
  if (!email) {
    return res.status(422).json({
      message: 'E-Mail fehlt'
    })
  }

  const response = await sendEmail(email, subscribeText(email))
  return res.json(response)
})

module.exports = server
