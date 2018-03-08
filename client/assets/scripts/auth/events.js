'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault() // prevents page from refreshing!!
  const data = getFormFields(this)
  console.log('data is', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('#user-signup input[type="text"]').val(''))
    .then($('#user-signup input[type="password"]').val(''))
    .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('#user-signup').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
