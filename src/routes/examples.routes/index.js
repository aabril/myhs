const apiController = require('../../controllers/examples.controller');
const passportService = require('../../services/passport.service');

const multer = require('multer');
const path = require('path');
const upload = multer({ dest: path.join(__dirname, '../../uploads') });

function apiRoutes(app) {
  app.get('/examples', apiController.getApi);
  app.get('/examples/lastfm', apiController.getLastfm);
  app.get('/examples/nyt', apiController.getNewYorkTimes);
  app.get('/examples/aviary', apiController.getAviary);
  app.get('/examples/steam', passportService.isAuthenticated, passportService.isAuthorized, apiController.getSteam);
  app.get('/examples/stripe', apiController.getStripe);
  app.post('/examples/stripe', apiController.postStripe);
  app.get('/examples/scraping', apiController.getScraping);
  app.get('/examples/twilio', apiController.getTwilio);
  app.post('/examples/twilio', apiController.postTwilio);
  app.get('/examples/clockwork', apiController.getClockwork);
  app.post('/examples/clockwork', apiController.postClockwork);
  app.get('/examples/foursquare', passportService.isAuthenticated, passportService.isAuthorized, apiController.getFoursquare);
  app.get('/examples/tumblr', passportService.isAuthenticated, passportService.isAuthorized, apiController.getTumblr);
  app.get('/examples/facebook', passportService.isAuthenticated, passportService.isAuthorized, apiController.getFacebook);
  app.get('/examples/github', passportService.isAuthenticated, passportService.isAuthorized, apiController.getGithub);
  app.get('/examples/twitter', passportService.isAuthenticated, passportService.isAuthorized, apiController.getTwitter);
  app.post('/examples/twitter', passportService.isAuthenticated, passportService.isAuthorized, apiController.postTwitter);
  app.get('/examples/linkedin', passportService.isAuthenticated, passportService.isAuthorized, apiController.getLinkedin);
  app.get('/examples/instagram', passportService.isAuthenticated, passportService.isAuthorized, apiController.getInstagram);
  app.get('/examples/paypal', apiController.getPayPal);
  app.get('/examples/paypal/success', apiController.getPayPalSuccess);
  app.get('/examples/paypal/cancel', apiController.getPayPalCancel);
  app.get('/examples/lob', apiController.getLob);
  app.get('/examples/upload', apiController.getFileUpload);
  app.post('/examples/upload', upload.single('myFile'), apiController.postFileUpload);
  app.get('/examples/pinterest', passportService.isAuthenticated, passportService.isAuthorized, apiController.getPinterest);
  app.post('/examples/pinterest', passportService.isAuthenticated, passportService.isAuthorized, apiController.postPinterest);
  app.get('/examples/google-maps', apiController.getGoogleMaps);
  app.get('/examples/chart', apiController.getChart);
}

module.exports = apiRoutes