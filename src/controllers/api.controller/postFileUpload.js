function postFileUpload (req, res) {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};

module.exports = postFileUpload

