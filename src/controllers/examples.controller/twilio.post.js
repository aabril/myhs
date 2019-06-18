const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

/**
 * POST /example/twilio
 * Send a text message using Twilio.
 */
function postTwilio (req, res, next) {
    req.assert('number', 'Phone number is required.').notEmpty();
    req.assert('message', 'Message cannot be blank.').notEmpty();
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/example/twilio');
    }
  
    const message = {
      to: req.body.number,
      from: '+13472235148',
      body: req.body.message
    };
    twilio.messages.create(message).then((sentMessage) => {
      req.flash('success', { msg: `Text send to ${sentMessage.to}` });
      res.redirect('/example/twilio');
    }).catch(next);
};

module.exports = postTwilio

