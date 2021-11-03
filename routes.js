// This file was added by layer0 init.
// You should commit this file to source control.

const { Router } = require('@layer0/core/router')

// const ONE_HOUR = 60 * 60
// const ONE_DAY = 24 * ONE_HOUR

module.exports = new Router()
  .match('/.netlify/functions/:path*', ({ renderWithApp }) => {
    renderWithApp()
  })

  .match('/:path*', ({ serveStatic, renderWithApp }) => {
    serveStatic('web/dist/:path*', {
      onNotFound: () => {
        console.log('not found')
        renderWithApp()
      },
    })
  })
