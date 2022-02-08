const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes
  .add('index', '/')
  .add('contact', '/contact')
  .add('media', '/media')
  .add('newsletter', '/newsletter/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug')

module.exports = routes
