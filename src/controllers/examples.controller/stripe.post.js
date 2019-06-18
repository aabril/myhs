const stripe = require('stripe')(process.env.STRIPE_SKEY);

/**
 * POST /example/stripe
 * Make a payment.
 */
function postStripe (req, res) {
    const { stripeToken, stripeEmail } = req.body;
    stripe.charges.create({
      amount: 395,
      currency: 'usd',
      source: stripeToken,
      description: stripeEmail
    }, (err) => {
      if (err && err.type === 'StripeCardError') {
        req.flash('errors', { msg: 'Your card has been declined.' });
        return res.redirect('/example/stripe');
      }
      req.flash('success', { msg: 'Your card has been successfully charged.' });
      res.redirect('/example/stripe');
    });
};
  
module.exports = postStripe
