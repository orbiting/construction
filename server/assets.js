const server = require('express').Router()
const fetch = require('isomorphic-unfetch')

const { ASSETS_REPOS_REDIRECT_TARGET } = process.env

server.get('/assets/*', async (req, res, next) => {
  if (!ASSETS_REPOS_REDIRECT_TARGET) {
    return next()
  }

  const { originalUrl } = req
  const targetPath = originalUrl.replace(/^\/assets\/(.+?)\//, '')
  const targetUrl = new URL(targetPath, ASSETS_REPOS_REDIRECT_TARGET)

  await fetch(targetUrl.toString())
    .then(targetRes => {
      const { ok, status, statusText, headers } = targetRes
      if (!ok) {
        return res.status(status).end(statusText)
      }

      Array
        .from(['Content-Type', 'Last-Modified', 'Content-Length'])
        .forEach(key => { res.set(key, headers.get(key)) })

      targetRes.body.pipe(res)
    })
    .catch((e) => {
      console.error({ e, originalUrl, targetPath, ASSETS_REPOS_REDIRECT_TARGET, targetUrl })
      return res.status(500).end('Internal Server Error')
    })
})

module.exports = server
