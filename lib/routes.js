const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes
  .add('index', '/')
  .add('contact', '/contact')
  .add('media', '/media')
  .add('newsletter', '/newsletter/:path*')

module.exports = routes
