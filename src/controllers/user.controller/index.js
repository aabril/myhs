const getLogin = require('./getLogin');
const postLogin = require('./postLogin')
const logout = require('./logout')
const getSignup = require('./getSignup')
const postSignup = require('./postSignup')
const getAccount = require('./getAccount')
const postUpdateProfile = require('./postUpdateProfile')
const postUpdatePassword = require('./postUpdatePassword')
const postDeleteAccount = require('./postDeleteAccount')
const getOauthUnlink = require('./getOauthUnlink')
const getReset = require('./getReset')
const postReset = require('./postReset')
const getForgot = require('./getForgot')
const postForgot = require('./postForgot')

module.exports = {
  getLogin,
  postLogin,
  logout,
  getSignup,
  postSignup,
  getAccount,
  postUpdateProfile,
  postUpdatePassword,
  postDeleteAccount,
  getOauthUnlink,
  getReset,
  postReset,
  getForgot,
  postForgot
}