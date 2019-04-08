const staticRoutes = require('./static.routes');
const primaryRoutes = require('./primary.routes');
const apiRoutes = require('./api.routes');
const oauthSigninRoutes = require('./oauth_signin.routes');
const oauthExamplesRoutes = require('./oauth_examples.routes');

function setRoutes(app){
  staticRoutes(app)
  primaryRoutes(app)
  apiRoutes(app)
  oauthSigninRoutes(app)
  oauthExamplesRoutes(app)
}

module.exports = setRoutes