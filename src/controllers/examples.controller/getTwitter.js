const Twit = require('twit');

/**
 * GET /example/twitter
 * Twitter API example.
 */
async function getTwitter (req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'twitter');
    const T = new Twit({
      consumer_key: process.env.TWITTER_KEY,
      consumer_secret: process.env.TWITTER_SECRET,
      access_token: token.accessToken,
      access_token_secret: token.tokenSecret
    });
    try {
      const { data: { statuses: tweets } } = await T.get('search/tweets', {
        q: 'nodejs since:2013-01-01',
        geocode: '40.71448,-74.00598,5mi',
        count: 10
      });
      res.render('original/example/twitter', {
        title: 'Twitter API',
        tweets
      });
    } catch (error) {
      next(error);
    }
};

module.exports = getTwitter

