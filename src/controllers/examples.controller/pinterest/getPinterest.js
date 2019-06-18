const request = require('request');

/**
 * GET /example/pinterest
 * Pinterest API example.
 */
function getPinterest (req, res, next) {
  const token = req.user.tokens.find(token => token.kind === 'pinterest');
  request.get({ url: 'https://api.pinterest.com/v1/me/boards/', qs: { access_token: token.accessToken }, json: true }, (err, request, body) => {
    if (err) { return next(err); }
    res.render('original/example/pinterest', {
      title: 'Pinterest API',
      boards: body.data
    });
  });
};

module.exports = getPinterest

