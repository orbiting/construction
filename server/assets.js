const server = require('express').Router()

const { ASSETS_REPOS_REDIRECT_TARGET } = process.env

server.get('/assets/*', async (req, res, next) => {
  if (!ASSETS_REPOS_REDIRECT_TARGET) {
    return next()
  }

  const { originalUrl } = req
  const targetPath = originalUrl.replace(/^\/assets\/(.+?)\//, '')
  const targetUrl = new URL(targetPath, ASSETS_REPOS_REDIRECT_TARGET)

  res.redirect(targetUrl)
})

module.exports = server
