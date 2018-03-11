'use strict'

const store = require('../store')
const showAllDowntimeInstances = require('../templates/downtime_instance-listing.handlebars')

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

const getAllDowntimeSuccess = function (data) {
  $('#getall-message').text('Downtime Instances Received')
  $('#getall-message').css('background-color', 'green')
}

const getAllDowntimeFailure = function (error) {
  $('#getall-message').text('Error Retrieving Instances')
  $('#getall-message').css('background-color', 'red')
  console.log(error)
}

const getDowntimeInstancesSuccess = (data) => {
  console.log('Data_downtime_instance in getDowntimeInstancesSuccess is ', data)
  const downtimeInstancesHtml = showAllDowntimeInstances({ downtime_instance: data.downtime_instance })
  $('.content').append(downtimeInstancesHtml)
}

const failure = (error) => {
  console.error(error)
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
  getAllDowntimeSuccess,
  getAllDowntimeFailure,
  updateDowntimeSuccess,
  updateDowntimeFailure,
  deleteDowntimeSuccess,
  deleteDowntimeFailure,
  getDowntimeInstancesSuccess,
  failure
}
