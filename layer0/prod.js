require('dotenv-defaults').config()

const toml = require('toml')
const fs = require('fs')
const path = require('path')
const { apiServerHandler } = require('@redwoodjs/api-server/dist/handler')

const redwoodConfig = toml.parse(
  fs.readFileSync(path.join(process.cwd(), 'redwood.toml'), 'utf8')
)

module.exports = async function prod(port) {
  await apiServerHandler({ port, apiRootPath: `${redwoodConfig.web.apiUrl}/` })
}
