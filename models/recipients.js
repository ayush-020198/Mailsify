const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: 0 },
});

module.exports = RecipientSchema;
