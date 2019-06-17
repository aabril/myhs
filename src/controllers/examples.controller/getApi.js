/**
 * GET /api
 * List of API examples.
 */
function getApi(req, res) {
    res.render('original/example/index', {
      title: 'API Examples'
    });
};

module.exports = getApi

