const Linkedin = require('node-linkedin')(process.env.LINKEDIN_ID, process.env.LINKEDIN_SECRET, process.env.LINKEDIN_CALLBACK_URL);

/**
 * GET /example/linkedin
 * LinkedIn API example.
 */
function getLinkedin (req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'linkedin');
    const linkedin = Linkedin.init(token.accessToken);
    linkedin.people.me((err, $in) => {
      if (err) { return next(err); }
      res.render('original/example/linkedin', {
        title: 'LinkedIn API',
        profile: $in
      });
    });
  };

module.exports = getLinkedin

