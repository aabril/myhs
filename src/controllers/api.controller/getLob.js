const lob = require('lob')(process.env.LOB_KEY);

/**
 * GET /api/lob
 * Lob API example.
 */
function getLob (req, res, next) {
  lob.usZipLookups.lookup({ zip_code: '94107' }, (err, zipdetails) => {
    if (err) { return next(err); }
    res.render('original/api/lob', {
      title: 'Lob API',
      zipdetails,
    });
  });
};

module.exports = getLob

