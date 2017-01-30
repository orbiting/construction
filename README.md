# Construction
Construction site for Project-R

## Development
Boostrap the `.env` file
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

Run the app
```
npm run dev
```
Access the website under: http://localhost:4000

## Assets

Assets are hosted exoscale.ch s3.

Create following `.s3cfg` file:
```
[default]
host_base = sos.exo.io
host_bucket = %(bucket)s.sos.exo.io
access_key = X
secret_key = X
use_https = True
signature_v2 = True
```

Run `make upload-assets` to upload them via [s3cmd](http://s3tools.org/s3cmd).