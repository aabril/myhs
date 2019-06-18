const lob = require('lob')(process.env.LOB_KEY);

/**
 * GET /example/lob
 * Lob API example.
 */
function getLob (req, res, next) {
  lob.usZipLookups.lookup({ zip_code: '94107' }, (err, zipdetails) => {
    if (err) { return next(err); }
    res.render('original/example/lob', {
      title: 'Lob API',
      zipdetails,
    });
  });
};

module.exports = getLob

