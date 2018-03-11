'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#before-signinauth-message').text('Sign-Up Successful!')
  $('#before-signinauth-message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#before-signinauth-message').text('Error On Sign-Up')
  $('#before-signinauth-message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#after-signinauth-message').text('Sign-In Successful!')
  $('#after-signinauth-message').css('background-color', 'green')
  store.user = data.user
  console.log('Data user in signin success is ', data.user)
}

const signInFailure = function (error) {
  $('#after-signinauth-message').text('Error On Sign-In')
  $('#after-signinauth-message').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function () {
  $('#after-signinauth-message').text('Successfully Changed Password!')
  $('#after-signinauth-message').css('background-color', 'green')
}

const changePasswordFailure = function (error) {
  $('#after-signinauth-message').text('Password Change Unsuccessful')
  $('#after-signinauth-message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function () {
  $('#before-signinauth-message').text('Successfully Signed Out')
  $('#before-signinauth-message').css('background-color', 'green')
}

const signOutFailure = function (error) {
  $('#before-signinauth-message').text('Sign Out Unsuccessful')
  $('#before-signinauth-message').css('background-color', 'red')
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
