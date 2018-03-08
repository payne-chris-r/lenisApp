'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signup-message').text('Sign-Up Successful!')
  $('#signup-message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#signup-message').text('Error On Sign-Up')
  $('#signup-message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#signin-message').text('Sign-In Successful!')
  $('#signin-message').css('background-color', 'green')
  store.user = data.user
  console.log('Data user in signin success is ', data.user)
}

const signInFailure = function (error) {
  $('#signin-message').text('Error On Sign-In')
  $('#signin-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
