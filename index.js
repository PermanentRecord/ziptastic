'use strict'

const fs = require('fs-promise')
const path = require('path')
const toTitleCase = require('to-title-case');

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
          let obj = data[code]
          obj.city = toTitleCase(obj.city)
          return resolve(obj)
        }
        return reject('Could not find specified postal code: ' + code)
      } catch(e) {
        return reject('Could not find specified country:' + country)
      }
    })
  }
}

module.exports = Ziptastic
