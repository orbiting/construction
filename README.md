# Construction

Construction site for Project R

## Development

Boostrap the `.env` file:
```
PORT=4000
PUBLIC_BASE_URL=http://localhost:4000
API_BASE_URL=http://localhost:3004

META_ROBOTS=noindex

SUBSCRIBE_SECRET=
MANDRILL_API_KEY=
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
MAILCHIMP_INTEREST_ID=
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