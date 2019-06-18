/**
 * GET /example/upload
 * File Upload API example.
 */

function getFileUpload (req, res) {
  res.render('original/example/upload', {
    title: 'File Upload'
  });
};

module.exports = getFileUpload

