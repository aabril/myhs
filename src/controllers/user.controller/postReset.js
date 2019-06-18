const nodemailer = require('nodemailer');
const User = require('../../models/user.model');

/**
 * POST /reset/:token
 * Process the reset password request.
 */
function postReset (req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long.').len(4);
    req.assert('confirm', 'Passwords must match.').equals(req.body.password);
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('back');
    }
  
    const resetPassword = () =>
      User
        .findOne({ passwordResetToken: req.params.token })
        .where('passwordResetExpires').gt(Date.now())
        .then((user) => {
          if (!user) {
            req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
            return res.redirect('back');
          }
          user.password = req.body.password;
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          return user.save().then(() => new Promise((resolve, reject) => {
            req.logIn(user, (err) => {
              if (err) { return reject(err); }
              resolve(user);
            });
          }));
        });
  
    const sendResetPasswordEmail = (user) => {
      if (!user) { return; }
      let transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
      const mailOptions = {
        to: user.email,
        from: 'hackathon@starter.com',
        subject: 'Your Hackathon Starter password has been changed',
        text: `Hello,\n\nThis is a confirmation that the password for your account ${user.email} has just been changed.\n`
      };
      return transporter.sendMail(mailOptions)
        .then(() => {
          req.flash('success', { msg: 'Success! Your password has been changed.' });
        })
        .catch((err) => {
          if (err.message === 'self signed certificate in certificate chain') {
            console.log('WARNING: Self signed certificate in certificate chain. Retrying with the self signed certificate. Use a valid certificate if in production.');
            transporter = nodemailer.createTransport({
              service: 'SendGrid',
              auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASSWORD
              },
              tls: {
                rejectUnauthorized: false
              }
            });
            return transporter.sendMail(mailOptions)
              .then(() => {
                req.flash('success', { msg: 'Success! Your password has been changed.' });
              });
          }
          console.log('ERROR: Could not send password reset confirmation email after security downgrade.\n', err);
          req.flash('warning', { msg: 'Your password has been changed, however we were unable to send you a confirmation email. We will be looking into it shortly.' });
          return err;
        });
    };
  
    resetPassword()
      .then(sendResetPasswordEmail)
      .then(() => { if (!res.finished) res.redirect('/'); })
      .catch(err => next(err));
  };

module.exports = postReset