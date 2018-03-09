'use strict'

// const store = require('../store')

const createDowntimeSuccess = function (data) {
  $('#create-message').text('Created New Downtime!')
  $('#create-message').css('background-color', 'green')
  console.log(data)
}

const createDowntimeFailure = function (error) {
  $('#create-message').text('Error On New Downtime')
  $('#create-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createDowntimeSuccess,
  createDowntimeFailure
}
