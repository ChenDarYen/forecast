'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH: '"https://api.openweathermap.org/data/2.5/forecast?appid=4b919e73866b859d9ae7d061d939611d"'
})
