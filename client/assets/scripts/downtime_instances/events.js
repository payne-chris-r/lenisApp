'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createDowntime(data)
    .then(ui.createDowntimeSuccess)
    .then($('#create-downtime input[type="text"]').val(''))
    .catch(ui.createDowntimeFailure)
}

const onGetAllDowntime = function (event) {
  event.preventDefault()
  api.getAllDowntime()
    .then(ui.getAllDowntimeSuccess)
    .catch(ui.getAllDowntimeFailure)
}

const onUpdateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data in events on onUpdateDowntime is ', data)
  api.updateDowntime(data)
    .then(ui.updateDowntimeSuccess)
    .then($('#update_downtime input[type="text"]').val(''))
    .catch(ui.updateDowntimeFailure)
}

const addHandlers = () => {
  $('#create-downtime').on('submit', onCreateDowntime)
  $('#get-alldowntime').on('submit', onGetAllDowntime)
  $('#update-downtime').on('submit', onUpdateDowntime)
}

module.exports = {
  addHandlers
}
