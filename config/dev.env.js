'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEATHERAPIPATH: '"https://api.openweathermap.org/data/2.5/weather?appid=4b919e73866b859d9ae7d061d939611d"',
  FORECASTAPIPATH: '"https://api.openweathermap.org/data/2.5/forecast?appid=4b919e73866b859d9ae7d061d939611d&cnt=6"'
})
