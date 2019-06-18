/**
 * GET /example/paypal/cancel
 * PayPal SDK example.
 */
function getPayPalCancel (req, res) {
  req.session.paymentId = null;
  res.render('original/example/paypal', {
    result: true,
    canceled: true
  });
};

module.exports = getPayPalCancel

