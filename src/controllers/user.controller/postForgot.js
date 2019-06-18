const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user.model');
const randomBytesAsync = promisify(crypto.randomBytes);

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */
function postForgot (req, res, next) {
    req.assert('email', 'Please enter a valid email address.').isEmail();
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }
  
    const createRandomToken = randomBytesAsync(16)
      .then(buf => buf.toString('hex'));
  
    const setRandomToken = token =>
      User
        .findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
            req.flash('errors', { msg: 'Account with that email address does not exist.' });
          } else {
            user.passwordResetToken = token;
            user.passwordResetExpires = Date.now() + 3600000; // 1 hour
            user = user.save();
          }
          return user;
        });
  
    const sendForgotPasswordEmail = (user) => {
      if (!user) { return; }
      const token = user.passwordResetToken;
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
        subject: 'Reset your password on Hackathon Starter',
        text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
          Please click on the following link, or paste this into your browser to complete the process:\n\n
          http://${req.headers.host}/reset/${token}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`
      };
      return transporter.sendMail(mailOptions)
        .then(() => {
          req.flash('info', { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
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
                req.flash('info', { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
              });
          }
          console.log('ERROR: Could not send forgot password email after security downgrade.\n', err);
          req.flash('errors', { msg: 'Error sending the password reset message. Please try again shortly.' });
          return err;
        });
    };
  
    createRandomToken
      .then(setRandomToken)
      .then(sendForgotPasswordEmail)
      .then(() => res.redirect('/forgot'))
      .catch(next);
  };

module.exports = postForgot