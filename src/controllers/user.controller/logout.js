/**
 * GET /logout
 * Log out.
 */
function logout (req, res) {
    req.logout();
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err);
      req.user = null;
      res.redirect('/');
    });
};

module.exports = logout