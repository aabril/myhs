const User = require('../../models/user.model');

/**
 * POST /account/delete
 * Delete user account.
 */
function postDeleteAccount (req, res, next) {
    User.deleteOne({ _id: req.user.id }, (err) => {
      if (err) { return next(err); }
      req.logout();
      req.flash('info', { msg: 'Your account has been deleted.' });
      res.redirect('/');
    });
  };

module.exports = postDeleteAccount