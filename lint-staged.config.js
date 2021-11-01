/* eslint-disable @typescript-eslint/no-var-requires */
const micromatch = require("micromatch")

module.exports = {
  "**/*.tsx": (files) => {
    const match = micromatch.not(files)

    return match.map((file) => `yarn run eslint --fix ${file}`)
  },
  "**/*.scss": (files) => {
    const match = micromatch.not(files)

    return match.map((file) => `yarn stylelint --aei ${file}`)
  },
}
