/**
 * GET /example/aviary
 * Aviary image processing example.
 */
function getAviary (req, res) {
    res.render('original/example/aviary', {
      title: 'Aviary API'
    });
};

module.exports = getAviary

