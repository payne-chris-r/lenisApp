'use strict'

const store = require('../store')
const showInstanceTemplate = require('../templates/downtime_instance-listing.handlebars')
const showInstanceAllTemplate = require('../templates/downtime_instance-all.handlebars')

const createDowntimeSuccess = function (data) {
  $('#create-message').text('Created New Downtime!')
  $('#create-message').css('background-color', 'green')
  store.downtime_instance = data.downtime_instance
}

const createDowntimeFailure = function (error) {
  $('#create-message').text('Error On New Downtime')
  $('#create-message').css('background-color', 'red')
  console.log(error)
}

const getMyDowntimeSuccess = function (data) {
  $('#get-message').text('Downtime Instance Received')
  $('#get-message').css('background-color', 'green')
  store.downtime_instance = data.downtime_instance
  const showInstanceHtml = showInstanceTemplate({ downtime_instance: data.downtime_instance })
  $('.downtime-content').append(showInstanceHtml)
}

const getMyDowntimeFailure = function (error) {
  $('#get-message').text('Error Retrieving Instance')
  $('#get-message').css('background-color', 'red')
  console.log(error)
}

const getAllDowntimeSuccess = function (data) {
  $('#get-message').text('All Downtime Instances Received')
  $('#get-message').css('background-color', 'green')
  store.downtime_instance = data.downtime_instance
  const showInstanceAllHtml = showInstanceAllTemplate({ downtime_instance: data.downtime_instance })
  $('.downtime-content').append(showInstanceAllHtml)
}

const getAllDowntimeFailure = function (error) {
  $('#get-message').text('Error Retrieving Instance')
  $('#get-message').css('background-color', 'red')
  console.log(error)
}

const updateDowntimeSuccess = function (data) {
  $('#update-message').text('Instance Updated Successfully')
  $('#update-message').css('background-color', 'green')
}

const updateDowntimeFailure = function (error) {
  $('#update-message').text('Error on Update')
  $('#update-message').css('background-color', 'red')
  console.log(error)
}

const deleteDowntimeSuccess = function () {
  $('#delete-message').text('Instance Deleted Successfully')
  $('#delete-message').css('background-color', 'green')
}

const deleteDowntimeFailure = function (error) {
  $('#delete-message').text('Error on Delete')
  $('#delete-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  createDowntimeSuccess,
  createDowntimeFailure,
  getMyDowntimeSuccess,
  getMyDowntimeFailure,
  getAllDowntimeSuccess,
  getAllDowntimeFailure,
  updateDowntimeSuccess,
  updateDowntimeFailure,
  deleteDowntimeSuccess,
  deleteDowntimeFailure
}
