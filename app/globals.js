const fs = require('fs')
const path = require('path')

const schemaPath = path.join(__dirname, 'api/schemas/')

const globals = {
  getSchema (folder, file) {
    return fs.readFileSync(`${schemaPath}${folder}/${file}.graphql`, 'utf8')
  }
}

module.exports = globals
