/**
 * GET /api/clockwork
 * Clockwork SMS API example.
 */
function getClockwork (req, res) {
    res.render('original/api/clockwork', {
      title: 'Clockwork SMS API'
    });
  };

module.exports = getClockwork

