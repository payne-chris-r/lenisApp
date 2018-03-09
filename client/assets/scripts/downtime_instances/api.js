'use strict'

const config = require('../config')
const store = require('../store')

const createDowntime = function (data) {
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

const getAllDowntime = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/downtime_instances',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createDowntime,
  getAllDowntime
}
