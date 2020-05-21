const mongoose = require('mongoose');
const RecipientSchema = require('./recipients');

const { Schema } = mongoose;

const surveySchema = new Schema({
	title: String,
	subject: String,
	body: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'users' },
	dateSent: Date,
	lastResponded: Date,
});

mongoose.model('surveys', surveySchema);
