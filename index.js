const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).json('Success');
});

const PORT = process.env.PORT || 5000;
app.listen(console.log('Running on port ' + PORT));
