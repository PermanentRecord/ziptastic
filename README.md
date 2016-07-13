# Ziptastic

## Overview
This is a port of the wonderful [Ziptastic library](https://www.getziptastic.com/) for Node.  The key differences in this port are:

* Locally hosted flat database structure instead of Redis
* Country-specific (To help with memory footprint)

## Usage

'use strict'

const Ziptastic = require('./index.js')

let z = new Ziptastic()

z.getInfo('55401')
  .then((obj) => {
    console.log(obj)
    // Should log: { city: 'MINNEAPOLIS', state: 'MN', country: 'US' }
  })
  .catch((e) => {
    console.log(e)
  })


## Todos

* Add data for countries outside US