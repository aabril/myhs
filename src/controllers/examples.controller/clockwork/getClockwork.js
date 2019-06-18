/**
 * GET /example/clockwork
 * Clockwork SMS API example.
 */
function getClockwork (req, res) {
    res.render('original/example/clockwork', {
      title: 'Clockwork SMS API'
    });
  };

module.exports = getClockwork

