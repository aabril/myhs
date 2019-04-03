/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('newtheme/home', {
    title: 'Home'
  });
};
