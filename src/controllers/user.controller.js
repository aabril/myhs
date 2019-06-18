const getLogin = require('./user.controller/getLogin');
const postLogin = require('./user.controller/postLogin')
const logout = require('./user.controller/logout')
const getSignup = require('./user.controller/getSignup')
const postSignup = require('./user.controller/postSignup')
const getAccount = require('./user.controller/getAccount')
const postUpdateProfile = require('./user.controller/postUpdateProfile')
const postUpdatePassword = require('./user.controller/postUpdatePassword')
const postDeleteAccount = require('./user.controller/postDeleteAccount')
const getOauthUnlink = require('./user.controller/getOauthUnlink')
const getReset = require('./user.controller/getReset')
const postReset = require('./user.controller/postReset')
const getForgot = require('./user.controller/getForgot')
const postForgot = require('./user.controller/postForgot')

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