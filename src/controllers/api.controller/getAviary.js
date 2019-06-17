/**
 * GET /api/aviary
 * Aviary image processing example.
 */
function getAviary (req, res) {
    res.render('original/api/aviary', {
      title: 'Aviary API'
    });
};

module.exports = getAviary

