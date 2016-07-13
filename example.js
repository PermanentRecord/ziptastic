'use strict'

const Ziptastic = require('./index.js')

let z = new Ziptastic()

z.getInfo('55401')
  .then((obj) => {
    console.log(obj)
  })
  .catch((e) => {
    console.log(e)
  })
