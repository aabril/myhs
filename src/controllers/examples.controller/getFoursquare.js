const axios = require('axios');

/**
 * GET /example/foursquare
 * Foursquare API example.
 */
async function getFoursquare(req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'foursquare');
    let trendingVenues;
    let venueDetail;
    let userCheckins;
    axios.all([
      axios.get(`https://api.foursquare.com/v2/venues/trending?ll=40.7222756,-74.0022724&limit=50&oauth_token=${token.accessToken}&v=20140806`),
      axios.get(`https://api.foursquare.com/v2/venues/49da74aef964a5208b5e1fe3?oauth_token=${token.accessToken}&v=20190113`),
      axios.get(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${token.accessToken}&v=20190113`)
    ])
      .then(axios.spread((trendingVenuesRes, venueDetailRes, userCheckinsRes) => {
        trendingVenues = trendingVenuesRes.data.response;
        venueDetail = venueDetailRes.data.response;
        userCheckins = userCheckinsRes.data.response;
        res.render('original/example/foursquare', {
          title: 'Foursquare API',
          trendingVenues,
          venueDetail,
          userCheckins
        });
      }))
      .catch((error) => {
        next(error);
      });
};

module.exports = getFoursquare

