const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes
  .add('index', '/')
  .add('contact', '/contact')
  .add('media', '/media')
  .add('newsletter', '/newsletter/:slug')

module.exports = routes
