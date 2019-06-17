const tumblr = require('tumblr.js');

/**
 * GET /api/tumblr
 * Tumblr API example.
 */
function getTumblr (req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'tumblr');
    const client = tumblr.createClient({
      consumer_key: process.env.TUMBLR_KEY,
      consumer_secret: process.env.TUMBLR_SECRET,
      token: token.accessToken,
      token_secret: token.tokenSecret
    });
    client.blogPosts('mmosdotcom.tumblr.com', { type: 'photo' }, (err, data) => {
      if (err) { return next(err); }
      res.render('original/api/tumblr', {
        title: 'Tumblr API',
        blog: data.blog,
        photoset: data.posts[0].photos
      });
    });
};
  
module.exports = getTumblr

