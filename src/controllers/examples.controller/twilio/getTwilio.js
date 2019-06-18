/**
 * GET /example/twilio
 * Twilio API example.
 */
function getTwilio (req, res) {
    res.render('original/example/twilio', {
      title: 'Twilio API'
    });
};

module.exports = getTwilio

