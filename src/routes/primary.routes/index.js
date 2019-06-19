const homeController = require('../../controllers/home.controller')
const userController = require('../../controllers/user.controller')
const contactController = require('../../controllers/contact.controller')
const passportService = require('../../services/passport.service')

function primaryRoutes(app) {
  app.get('/', homeController.index);
  app.get('/login', userController.getLogin);
  app.post('/login', userController.postLogin);
  app.get('/logout', userController.logout);
  app.get('/forgot', userController.getForgot);
  app.post('/forgot', userController.postForgot);
  app.get('/reset/:token', userController.getReset);
  app.post('/reset/:token', userController.postReset);
  app.get('/signup', userController.getSignup);
  app.post('/signup', userController.postSignup);
  app.get('/contact', contactController.getContact);
  app.post('/contact', contactController.postContact);
  app.get('/account', passportService.isAuthenticated, userController.getAccount);
  app.post('/account/profile', passportService.isAuthenticated, userController.postUpdateProfile);
  app.post('/account/password', passportService.isAuthenticated, userController.postUpdatePassword);
  app.post('/account/delete', passportService.isAuthenticated, userController.postDeleteAccount);
  app.get('/account/unlink/:provider', passportService.isAuthenticated, userController.getOauthUnlink);
}

module.exports = primaryRoutes


