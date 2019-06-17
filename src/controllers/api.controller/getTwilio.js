/**
 * GET /api/twilio
 * Twilio API example.
 */
function getTwilio (req, res) {
    res.render('original/api/twilio', {
      title: 'Twilio API'
    });
};

module.exports = getTwilio

