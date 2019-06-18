const getApi = require('./getApi');
const getFoursquare = require('./foursquare.get');
const getTumblr = require('./tumblr.get');
const getFacebook = require('./facebook.get');
const getScraping = require('./scraping.get');
const getGithub = require('./github.get');
const getAviary = require('./aviary.get');
const getNewYorkTimes = require('./newyorktimes.get');
const getLastfm = require('./lastfm.get');
const getTwitter = require('./twitter.get');
const postTwitter = require('./twitter.post');
const getSteam = require('./steam.get');
const getStripe = require('./stripe.get');
const postStripe = require('./stripe.post');
const getTwilio = require('./twilio.get');
const postTwilio = require('./twilio.post');
const getClockwork = require('./clockwork.get');
const postClockwork = require('./clockwork.post');
const getLinkedin = require('./linkedin.get');
const getChart = require('./chart.get');
const getInstagram = require('./instagram.get');
const getPayPal = require('./paypal.get');
const getPayPalSuccess = require('./paypal.success');
const getPayPalCancel = require('./paypal.cancel');
const getLob = require('./lob.get');
const getFileUpload = require('./fileupload.get');
const postFileUpload = require('./fileupload.post');
const getPinterest = require('./pinterest.get');
const postPinterest = require('./pinterest.post');
const getGoogleMaps = require('./googlemaps.get');

module.exports = {
  getApi,
  getFoursquare,
  getTumblr,
  getFacebook,
  getScraping,
  getGithub,
  getAviary,
  getNewYorkTimes,
  getLastfm,
  getTwitter,
  postTwitter,
  getSteam,
  getStripe,
  postStripe,
  getTwilio,
  postTwilio,
  getClockwork,
  postClockwork,
  getLinkedin,
  getChart,
  getInstagram,
  getPayPal,
  getPayPalSuccess,
  getPayPalCancel,
  getLob,
  getFileUpload,
  postFileUpload,
  getPinterest,
  postPinterest,
  getGoogleMaps
}