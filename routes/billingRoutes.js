const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 50000,
			currency: 'inr',
			description: 'Payment Gateway to add credits',
			source: req.body.id,
		});
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
