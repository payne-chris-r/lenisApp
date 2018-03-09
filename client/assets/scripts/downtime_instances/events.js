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
  const data = getFormFields(this)
  api.getAllDowntime(data)
    .then(ui.getAllDowntimeSuccess)
    .catch(ui.getAllDowntimeFailure)
}

const addHandlers = () => {
  $('#create-downtime').on('submit', onCreateDowntime)
  $('#get-alldowntime').on('submit', onGetAllDowntime)
}

module.exports = {
  addHandlers
}
