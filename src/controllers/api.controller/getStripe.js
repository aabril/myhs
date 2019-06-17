/**
 * GET /api/stripe
 * Stripe API example.
 */
function getStripe (req, res) {
    res.render('original/api/stripe', {
      title: 'Stripe API',
      publishableKey: process.env.STRIPE_PKEY
    });
};

module.exports = getStripe

