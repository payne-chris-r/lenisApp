'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateDowntime = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createDowntime(data)
    .then(ui.createDowntimeSuccess)
    .then($('#user-signup input[type="text"]').val(''))
    .catch(ui.createDowntimeFailure)
}

const addHandlers = () => {
  $('#create-downtime').on('submit', onCreateDowntime)
}

module.exports = {
  addHandlers
}
