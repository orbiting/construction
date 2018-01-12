const server = require('express').Router()
const bodyParser = require('body-parser')
const fetch = require('isomorphic-unfetch')
const crypto = require('crypto')

const SUBJECT = 'Bitte Anmeldung Project R-Newsletter bestätigen'
const FROM_EMAIL = 'jefferson@project-r.construction'
const FROM_NAME = 'Jefferson - Project R'

const subscribeText = (email, token) => `Guten Tag

Herzlichen Dank für Ihr Interesse an der Project R Genossenschaft und Republik.

Bestätigen Sie Ihre Newsletter-Anmeldung mit Klicken auf den folgenden Link:

${process.env.PUBLIC_BASE_URL}/newsletter/subscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}

Derzeit arbeiten wir hart am Aufbau des digitalen Magazins Republik. Auch die Project R Genossenschaft ist nicht untätig und veranstaltet bereits Debatten. Sobald wir wieder Neuigkeiten haben, werden wir uns melden!

Sie wollen Mitglied der Project R Genossenschaft und Verleger*in der Republik werden? Dann klicken Sie hier: www.republik.ch

Ihre R-Crew`

const sendEmail = (email, text) => {
  return fetch(`https://mandrillapp.com/api/1.0/messages/send.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      key: process.env.MANDRILL_API_KEY,
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

const subscribeEmail = (email) => {
  const hash = crypto
    .createHash('md5')
    .update(email)
    .digest('hex')
    .toLowerCase()

  const { MAILCHIMP_INTEREST_IDS = '' } = process.env
  const interestIds = MAILCHIMP_INTEREST_IDS.split(',').filter(Boolean)
  const interests = interestIds.reduce(
    (index, id) => {
      index[id] = true
      return index
    },
    {}
  )

  return fetch(`https://us14.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${hash}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + (new Buffer('anystring:' + process.env.MAILCHIMP_API_KEY).toString('base64'))
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      interests: interests
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.status >= 400) {
        if (data.title === 'Member Exists') {
          return {
            message: 'Sie sind bereits eingetragen.'
          }
        }
        return {
          message: 'Anmeldung fehlgeschlagen.'
        }
      }
      return {}
    })
}

server.get('/newsletter/subscribe', bodyParser.json(), async (req, res) => {
  const {email, token} = req.query
  if (!email) {
    return res.status(422).json({
      message: 'E-Mail fehlt'
    })
  }

  const sha = crypto
    .createHash('sha256')
    .update(email + process.env.SUBSCRIBE_SECRET)
    .digest('hex')

  if (!token) {
    const response = await sendEmail(email, subscribeText(email, sha))
    return res.json(response)
  } else {
    if (sha !== token) {
      return res.redirect(
        `/newsletter/welcome?message=${encodeURIComponent('Ungültige Anfrage.')}`
      )
    }
    const response = await subscribeEmail(email)
    return res.redirect([
      '/newsletter/welcome',
      response.message ? `?message=${encodeURIComponent(response.message)}` : ''
    ].join(''))
  }
})

module.exports = server
