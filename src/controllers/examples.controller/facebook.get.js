const graph = require('fbgraph');

/**
 * GET /example/facebook
 * Facebook API example.
 */
function getFacebook(req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'facebook');
    graph.setAccessToken(token.accessToken);
    graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, profile) => {
      if (err) { return next(err); }
      res.render('original/example/facebook', {
        title: 'Facebook API',
        profile
      });
    });
};

module.exports = getFacebook

