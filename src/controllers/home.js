/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('kelkenny/home', {
    title: 'Home'
  });
};
