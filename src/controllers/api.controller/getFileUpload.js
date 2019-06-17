/**
 * GET /api/upload
 * File Upload API example.
 */

function getFileUpload (req, res) {
  res.render('original/api/upload', {
    title: 'File Upload'
  });
};

module.exports = getFileUpload

