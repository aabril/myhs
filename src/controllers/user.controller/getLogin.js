/**
 * GET /login
 * Login page.
 */

function getLogin(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('original/account/login', {
        title: 'Login'
    });
};

module.exports = getLogin;