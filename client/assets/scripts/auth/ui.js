'use strict'

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

module.exports = {
  signUpSuccess,
  signUpFailure
}
