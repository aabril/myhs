const User = require('../../models/user.model');

/**
 * POST /account/password
 * Update current password.
 */
function postUpdatePassword (req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/account');
    }
  
    User.findById(req.user.id, (err, user) => {
      if (err) { return next(err); }
      user.password = req.body.password;
      user.save((err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Password has been changed.' });
        res.redirect('/account');
      });
    });
};

module.exports = postUpdatePassword