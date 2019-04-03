/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('original/home', {
    title: 'Home'
  });
};
