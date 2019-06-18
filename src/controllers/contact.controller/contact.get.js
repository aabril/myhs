/**
 * GET /contact
 * Contact form page.
 */
function getContact (req, res) {
    const unknownUser = !(req.user);
    res.render('original/contact', {
      title: 'Contact',
      unknownUser,
    });
};

module.exports = getContact