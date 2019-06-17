// const { promisify } = require('util');
// const request = require('request');
// const cheerio = require('cheerio');
// const graph = require('fbgraph');
// const { LastFmNode } = require('lastfm');
// const tumblr = require('tumblr.js');
// const GitHub = require('@octokit/rest');
// const Twit = require('twit');
// const stripe = require('stripe')(process.env.STRIPE_SKEY);
// const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
// const Linkedin = require('node-linkedin')(process.env.LINKEDIN_ID, process.env.LINKEDIN_SECRET, process.env.LINKEDIN_CALLBACK_URL);
// const clockwork = require('clockwork')({ key: process.env.CLOCKWORK_KEY });
// const paypal = require('paypal-rest-sdk');
// const lob = require('lob')(process.env.LOB_KEY);
// const ig = require('instagram-node').instagram();
// const axios = require('axios');

const getApi = require('./api.controller/getApi');
const getFoursquare = require('./api.controller/getFoursquare');
const getTumblr = require('./api.controller/getTumblr');
const getFacebook = require('./api.controller/getFacebook');
const getScraping = require('./api.controller/getScraping');
const getGithub = require('./api.controller/getGithub');
const getAviary = require('./api.controller/getAviary');
const getNewYorkTimes = require('./api.controller/getNewYorkTimes');
const getLastfm = require('./api.controller/getLastfm');
const getTwitter = require('./api.controller/getTwitter');
const postTwitter = require('./api.controller/postTwitter');
const getSteam = require('./api.controller/getSteam');
const getStripe = require('./api.controller/getStripe');
const postStripe = require('./api.controller/postStripe');
const getTwilio = require('./api.controller/getTwilio');
const postTwilio = require('./api.controller/postTwilio');
const getClockwork = require('./api.controller/getClockwork');
const postClockwork = require('./api.controller/postClockwork');
const getLinkedin = require('./api.controller/getLinkedin');
const getChart = require('./api.controller/getChart');
const getInstagram = require('./api.controller/getInstagram');
const getPayPal = require('./api.controller/getPayPal');
const getPayPalSuccess = require('./api.controller/getPayPalSuccess');
const getPayPalCancel = require('./api.controller/getPayPalCancel');
const getLob = require('./api.controller/getLob');
const getFileUpload = require('./api.controller/getFileUpload');
const postFileUpload = require('./api.controller/postFileUpload');
const getPinterest = require('./api.controller/getPinterest');
const postPinterest = require('./api.controller/postPinterest');
const getGoogleMaps = require('./api.controller/getGoogleMaps');

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