'use strict'

const signUpSuccess = function (data) {
  $('#message').text('Sign-Up Successful!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

module.exports = {
  signUpSuccess
}
