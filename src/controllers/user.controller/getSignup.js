/**
 * GET /signup
 * Signup page.
 */
function getSignup (req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('original/account/signup', {
      title: 'Create Account'
    });
};

module.exports = getSignup