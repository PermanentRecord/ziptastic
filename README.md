# Ziptastic

## Overview
This is a port of the wonderful [python Ziptastic library](https://www.getziptastic.com/) to Node.  The key differences in this port are:

* Locally hosted flat database structure instead of Redis
* Country-specific (To help with memory footprint)

## Usage

`'use strict'

const Ziptastic = require('./index.js')

let z = new Ziptastic()

z.getInfo('55401')
  .then((obj) => {
    console.log(obj)
    // Should log: { city: 'Minneapolis', state: 'MN', country: 'US' }
  })
  .catch((e) => { console.log(e) })`


## Todos

* Add data for countries outside US

## Related

* [node-ziptastic client-library](https://github.com/bendrucker/node-ziptastic) (for use with Ziptastic's hosted instances)
* Check out our other geo-library, [Zippy](https://github.com/PermanentRecord/zippy), if you need to geocode US postal codes.
