const request = require('request');

/**
 * POST /example/pinterest
 * Create a pin.
 */
function postPinterest (req, res, next) {
    req.assert('board', 'Board is required.').notEmpty();
    req.assert('note', 'Note cannot be blank.').notEmpty();
    req.assert('image_url', 'Image URL cannot be blank.').notEmpty();
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/example/pinterest');
    }
  
    const token = req.user.tokens.find(token => token.kind === 'pinterest');
    const formData = {
      board: req.body.board,
      note: req.body.note,
      link: req.body.link,
      image_url: req.body.image_url
    };
  
    request.post('https://api.pinterest.com/v1/pins/', { qs: { access_token: token.accessToken }, form: formData }, (err, request, body) => {
      if (err) { return next(err); }
      if (request.statusCode !== 201) {
        req.flash('errors', { msg: JSON.parse(body).message });
        return res.redirect('/example/pinterest');
      }
      req.flash('success', { msg: 'Pin created' });
      res.redirect('/example/pinterest');
    });
};
  
module.exports = postPinterest

