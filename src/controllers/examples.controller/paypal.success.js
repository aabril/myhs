const paypal = require('paypal-rest-sdk');

/**
 * GET /example/paypal/success
 * PayPal SDK example.
 */
function getPayPalSuccess (req, res) {
  const { paymentId } = req.session;
  const paymentDetails = { payer_id: req.query.PayerID };
  paypal.payment.execute(paymentId, paymentDetails, (err) => {
    res.render('original/example/paypal', {
      result: true,
      success: !err
    });
  });
};

module.exports = getPayPalSuccess

