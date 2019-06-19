const passport = require('passport');

/**
 * OAuth authorization routes. (API examples)
 */
function oauthExamplesRoutes(app){
  app.get('/auth/foursquare', passport.authorize('foursquare'));
  app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
    res.redirect('/api/foursquare');
  });
  app.get('/auth/tumblr', passport.authorize('tumblr'));
  app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
    res.redirect('/api/tumblr');
  });
  app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
  app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/api' }), (req, res) => {
    res.redirect(req.session.returnTo);
  });
  app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
  app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/api/pinterest');
  });
}

module.exports = oauthExamplesRoutes