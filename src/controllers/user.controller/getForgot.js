/**
 * GET /forgot
 * Forgot Password page.
 */
function getForgot (req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    res.render('original/account/forgot', {
      title: 'Forgot Password'
    });
};

module.exports = getForgot