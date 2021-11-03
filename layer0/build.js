/* istanbul ignore file */
const { DeploymentBuilder } = require('@layer0/core/deploy')
const FrameworkBuildError = require('@layer0/core/errors/FrameworkBuildError')
const { join } = require('path')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build(options) {
  builder.clearPreviousBuildOutput()

  if (!options.skipFramework) {
    const command = 'yarn rw build'
    try {
      await builder.exec(command)
    } catch (e) {
      throw new FrameworkBuildError('Redwood', command, e)
    }
  }

  builder.addJSAsset(join(appDir, '.redwood'))
  builder.addJSAsset(join(appDir, 'api', 'dist'))
  builder.addJSAsset(join(appDir, '.env.defaults'))
  builder.addJSAsset(join(appDir, 'redwood.toml'))
  await builder.build()
}
