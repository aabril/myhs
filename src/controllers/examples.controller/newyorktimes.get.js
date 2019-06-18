const request = require('request');

/**
 * GET /example/nyt
 * New York Times API example.
 */
function getNewYorkTimes (req, res, next) {
    const query = {
      'list-name': 'young-adult',
      'api-key': process.env.NYT_KEY
    };
    request.get({ url: 'http://api.nytimes.com/svc/books/v2/lists', qs: query }, (err, request, body) => {
      if (err) { return next(err); }
      if (request.statusCode >= 400) {
        return next(new Error(`New York Times API - ${body}`));
      }
      const books = JSON.parse(body).results;
      res.render('original/example/nyt', {
        title: 'New York Times API',
        books
      });
    });
};

module.exports = getNewYorkTimes

