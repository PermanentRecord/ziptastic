'use strict'

const fs = require('fs-promise')
const path = require('path')

class Ziptastic {
  getInfo (code, country) {
    if (!country) {
      country = 'us'
    }
    return new Promise((resolve, reject) => {
      // Cast.
      code = code.toString()

      // Ensure lower case.
      country = country.toLowerCase()

      try {
        let data = require(path.join(__dirname , 'data/ziptastic.' + country + '.json'))
        if (data[code]) {
          return resolve(data[code])
        }
        return reject('Could not find specified postal code: ' + code)
      } catch(e) {
        return reject('Could not find specified country:' + country)
      }
    })
  }
}

module.exports = Ziptastic
