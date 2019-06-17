/**
 * GET /example/stripe
 * Stripe API example.
 */
function getStripe (req, res) {
    res.render('original/example/stripe', {
      title: 'Stripe API',
      publishableKey: process.env.STRIPE_PKEY
    });
};

module.exports = getStripe

