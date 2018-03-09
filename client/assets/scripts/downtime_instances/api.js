'use strict'

const config = require('../config')
const store = require('../store')

const createDowntime = function (data) {
  console.log('Data in createDowntime is ', data)
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createDowntime
}
