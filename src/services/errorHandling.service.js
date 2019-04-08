const errorHandler = require('errorhandler');

/**
 * Error Handler.
 */
function errorHandling(app) {
  if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  } else {
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).send('Server Error');
    });
  }
}

module.exports = errorHandling