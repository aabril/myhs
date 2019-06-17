const Twit = require('twit');

/**
 * POST /api/twitter
 * Post a tweet.
 */
function postTwitter (req, res, next) {
    req.assert('tweet', 'Tweet cannot be empty').notEmpty();
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/api/twitter');
    }
  
    const token = req.user.tokens.find(token => token.kind === 'twitter');
    const twitConfig = {
      consumer_key: process.env.TWITTER_KEY,
      consumer_secret: process.env.TWITTER_SECRET,
      access_token: token.accessToken,
      access_token_secret: token.tokenSecret
    };
    const T = new Twit(twitConfig);
    T.post('statuses/update', { status: req.body.tweet }, (err) => {
      if (err) { return next(err); }
      req.flash('success', { msg: 'Your tweet has been posted.' });
      res.redirect('/api/twitter');
    });
  };

module.exports = postTwitter

