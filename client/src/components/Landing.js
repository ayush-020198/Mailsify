import React from 'react';

const style = {
	fontSize: 30,
	fontFamily: 'cursive',
};

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Welcome to Mailsify</h1>
			<p style={style}>
				Get a better idea about your start-up with this awesome survey
				website
			</p>
		</div>
	);
};

export default Landing;
