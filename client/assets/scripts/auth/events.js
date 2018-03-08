'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('#user-signup input[type="text"]').val(''))
    .then($('#user-signup input[type="password"]').val(''))
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then($('#user-signin input[type="text"]').val(''))
    .then($('#user-signin input[type="password"]').val(''))
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data in events on changepwd is ', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then($('#user-changepwd input[type="password"]').val(''))
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#user-signup').on('submit', onSignUp)
  $('#user-signin').on('submit', onSignIn)
  $('#user-changepwd').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
