const apiController = require('../controllers/api.controller');
const passportService = require('../services/passport.service');

const multer = require('multer');
const path = require('path');
const upload = multer({ dest: path.join(__dirname, '../uploads') });

function apiRoutes(app) {
  app.get('/api', apiController.getApi);
  app.get('/api/lastfm', apiController.getLastfm);
  app.get('/api/nyt', apiController.getNewYorkTimes);
  app.get('/api/aviary', apiController.getAviary);
  app.get('/api/steam', passportService.isAuthenticated, passportService.isAuthorized, apiController.getSteam);
  app.get('/api/stripe', apiController.getStripe);
  app.post('/api/stripe', apiController.postStripe);
  app.get('/api/scraping', apiController.getScraping);
  app.get('/api/twilio', apiController.getTwilio);
  app.post('/api/twilio', apiController.postTwilio);
  app.get('/api/clockwork', apiController.getClockwork);
  app.post('/api/clockwork', apiController.postClockwork);
  app.get('/api/foursquare', passportService.isAuthenticated, passportService.isAuthorized, apiController.getFoursquare);
  app.get('/api/tumblr', passportService.isAuthenticated, passportService.isAuthorized, apiController.getTumblr);
  app.get('/api/facebook', passportService.isAuthenticated, passportService.isAuthorized, apiController.getFacebook);
  app.get('/api/github', passportService.isAuthenticated, passportService.isAuthorized, apiController.getGithub);
  app.get('/api/twitter', passportService.isAuthenticated, passportService.isAuthorized, apiController.getTwitter);
  app.post('/api/twitter', passportService.isAuthenticated, passportService.isAuthorized, apiController.postTwitter);
  app.get('/api/linkedin', passportService.isAuthenticated, passportService.isAuthorized, apiController.getLinkedin);
  app.get('/api/instagram', passportService.isAuthenticated, passportService.isAuthorized, apiController.getInstagram);
  app.get('/api/paypal', apiController.getPayPal);
  app.get('/api/paypal/success', apiController.getPayPalSuccess);
  app.get('/api/paypal/cancel', apiController.getPayPalCancel);
  app.get('/api/lob', apiController.getLob);
  app.get('/api/upload', apiController.getFileUpload);
  app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
  app.get('/api/pinterest', passportService.isAuthenticated, passportService.isAuthorized, apiController.getPinterest);
  app.post('/api/pinterest', passportService.isAuthenticated, passportService.isAuthorized, apiController.postPinterest);
  app.get('/api/google-maps', apiController.getGoogleMaps);
  app.get('/api/chart', apiController.getChart);
}

module.exports = apiRoutes