const express = require('express')
const https = require('https')
const querystring = require('querystring')
const fs = require('fs')
const path = require('path')
const router = new express.Router()
const Subscriber = require('../models/subscriber')

const readableRandom = require('../lib/readableRandom')
const transporter = require('../lib/transporter')


const subscribeText = function(validationToken) {
  return `Ma’am, Sir,

herzlichen Dank für Ihr Interesse an Project R.

Wir arbeiten derzeit an dem Aufbau der Crowdfunding-Plattform, an der IT-Entwicklung und am Redaktionskonzept.
Sobald wir Neuigkeiten haben, werden wir uns wieder melden!

Dafür müssen Sie nur noch auf folgenden Link klicken:
https://project-r.construction/api/confirm/${validationToken}

Ihre R-Crew
`}

const sendConfimationEmail = (email, res) => {
  Subscriber.findOne( {email} ).then( (subscriber) => {
		//check(subscriber, Object);
		//check(subscriber.validationToken, String);
		transporter.sendMail({
			from: "jefferson@project-r.construction",
			to: email,
			subject: "Bitte Anmeldung Project R-Newsletter bestätigen",
			text: subscribeText(subscriber.validationToken)
		}, function(error, info) {
			if(error){
				console.log(error);
				return res.status(500).end("mail could not be sent: "+error)
			}
			res.status(200).end()
		});
	})
}

router.post('/subscribe', (req, res) => {
	//check(email, String);
	//check(lang, String);

	const { email, lang } = req.body

	const subscriber = {
		email: email,
		lang: lang,
		isValidated: false,
		validationToken: readableRandom(16),
		list: 'construction'
	}

	Subscriber.findOne( { email } ).then( (foundSubscriber) => {
		if(foundSubscriber) {
			if(foundSubscriber.isValidated) { //email exists and is validated
				res.status(200).end()
			} else { //email exists but is not validated
				sendConfimationEmail(email, res)
			}
		} else {
			var _subscriber = new Subscriber(subscriber)
			_subscriber.save( (error) => {
				if(error) {
					res.status(500).end("DB error")
				} else {
					sendConfimationEmail(email, res)
				}
			})
		}
	}).catch( (error) => {
		res.status(500).end("Error, please try again\n"+error)
	})

})

router.get('/confirm/:token', (req, res) => {
  const validationToken = req.params.token
  //check(validationToken, String)
  Subscriber.findOne({ validationToken }).then( (subscriber) => {

		if(!subscriber || subscriber.validationToken !== validationToken) {
			res.status(500).end("validationToken invalid!")
		}

		var postData = querystring.stringify({
			'subscribed': true,
			'address': subscriber.email
		});
		var mailgun = https.request({
			hostname: 'api.mailgun.net',
			path: `/v3/lists/${process.env.MAILGUN_LIST}/members`,
			method: 'POST',
			auth: `api:${process.env.MAILGUN_API_KEY}`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(postData)
			}
		}, (_res) => {
			Subscriber.update({validationToken: validationToken}, {$set: {isValidated: true}}, function(error, affected) {
				//console.log(error, affected)
				fs.readFile(path.join(__dirname, '../../public/welcome_aboard.html'), {encoding: 'utf-8'}, function(err,data){
					if(!err) {
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.write(data);
						res.end();
					} else {
						console.log(err)
						res.status(200).end("Welcome aboard!")
					}
				});
			})
		})

		mailgun.on('error', (e) => {
			console.log(`problem with request: ${e.message}`);
			res.status(500).end("Error, please try again.")
		})

		mailgun.write(postData)
		mailgun.end()
	}).catch( (error) => {
		res.status(500).end("Error, please try again\n"+error)
	})

})

module.exports = router;
