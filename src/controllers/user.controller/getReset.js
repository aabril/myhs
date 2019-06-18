const User = require('../../models/user.model');

/**
 * GET /reset/:token
 * Reset Password page.
 */
function getReset (req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    User
      .findOne({ passwordResetToken: req.params.token })
      .where('passwordResetExpires').gt(Date.now())
      .exec((err, user) => {
        if (err) { return next(err); }
        if (!user) {
          req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
          return res.redirect('/forgot');
        }
        res.render('original/account/reset', {
          title: 'Password Reset'
        });
      });
  };

module.exports = getReset