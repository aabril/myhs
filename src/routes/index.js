const staticRoutes = require('./static.routes');
const primaryRoutes = require('./primary.routes');
const examplesRoutes = require('./examples.routes');
const oauthSigninRoutes = require('./oauth_signin.routes');
const oauthExamplesRoutes = require('./oauth_examples.routes');

function setRoutes(app){
  staticRoutes(app)
  primaryRoutes(app)
  examplesRoutes(app)
  oauthSigninRoutes(app)
  oauthExamplesRoutes(app)
}

module.exports = setRoutes