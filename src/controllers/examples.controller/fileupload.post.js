function postFileUpload (req, res) {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/example/upload');
};

module.exports = postFileUpload

