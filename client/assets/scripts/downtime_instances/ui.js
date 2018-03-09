'use strict'

// const store = require('../store')

const createDowntimeSuccess = function (data) {
  $('#signup-message').text('Created New Downtime!')
  $('#signup-message').css('background-color', 'green')
  console.log(data)
}

const createDowntimeFailure = function (error) {
  $('#signup-message').text('Error On New Downtime')
  $('#signup-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createDowntimeSuccess,
  createDowntimeFailure
}
