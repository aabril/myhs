const clockwork = require('clockwork')({ key: process.env.CLOCKWORK_KEY });

/**
 * POST /api/clockwork
 * Send a text message using Clockwork SMS
 */
function postClockwork (req, res, next) {
  const message = {
    To: req.body.telephone,
    From: 'Hackathon',
    Content: 'Hello from the Hackathon Starter'
  };
  clockwork.sendSms(message, (err, responseData) => {
    if (err) { return next(err.errDesc); }
    req.flash('success', { msg: `Text sent to ${responseData.responses[0].to}` });
    res.redirect('/api/clockwork');
  });
};

module.exports = postClockwork

