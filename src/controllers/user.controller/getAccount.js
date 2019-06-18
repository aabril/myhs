/**
 * GET /account
 * Profile page.
 */
function getAccount (req, res) {
    res.render('original/account/profile', {
      title: 'Account Management'
    });
};

module.exports = getAccount