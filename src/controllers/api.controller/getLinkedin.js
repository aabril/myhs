/**
 * GET /api/linkedin
 * LinkedIn API example.
 */
function getLinkedin (req, res, next) {
    const token = req.user.tokens.find(token => token.kind === 'linkedin');
    const linkedin = Linkedin.init(token.accessToken);
    linkedin.people.me((err, $in) => {
      if (err) { return next(err); }
      res.render('original/api/linkedin', {
        title: 'LinkedIn API',
        profile: $in
      });
    });
  };

module.exports = getLinkedin

