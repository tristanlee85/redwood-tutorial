/* istanbul ignore file */
const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: 'Redwood',
    command: (port) => `yarn rw dev --fwd="--port=${port}"`,
    ready: [/listening on/i],
  })
}
