# Construction
Construction site for Project-R

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Development
Boostrap the .env file
```
MAIL_URL=smtp://postmaster@project-r.construction:POSTMASTER_PW@smtp.mailgun.org/
MAILGUN_API_KEY=YOUR_KEY
MAILGUN_LIST=construction_test@project-r.construction
MONGO_URL=mongodb://localhost/construction
```

Install dependencies
```
npm install
```

To develop the react app only:
```
npm start
```
Access the website under: http://localhost:3000


To develop the node server with the react app:
```
npm run build
npm run server
```
Access the website under: http://localhost:4000
