const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const Survey = mongoose.model('surveys');

module.exports = (app) => {
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('Thank you for taking the time');
	});

	app.post('/api/surveys/webhooks', (req, res) => {
		const events = _.map(req.body, (event) => {
			const pathname = new URL(event.url).pathname;
			const p = new Path('/api/surveys/:surveyId/:choice');
			console.log(p.test(pathname));
		});
	});

	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients
				.split(',')
				.map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});

		const mailer = new Mailer(survey, surveyTemplate(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
