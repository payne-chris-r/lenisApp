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

const changePasswordSuccess = function (data) {
  $('#changepwd-message').text('Successfully Changed Password!')
  $('#changepwd-message').css('background-color', 'green')
  console.log('Data for ui changepwd is ', data)
}

const changePasswordFailure = function (error) {
  $('#changepwd-message').text('Password Change Unsuccessful')
  $('#changepwd-message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#signout-message').text('Successfully Signed Out')
  $('#signout-message').css('background-color', 'green')
}

const signOutFailure = function (error) {
  $('#signout-message').text('Sign Out Unsuccessful')
  $('#signout-message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
