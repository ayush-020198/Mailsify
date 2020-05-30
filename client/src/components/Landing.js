import React from 'react';
import '../css/Landing.css';

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1 className="welcome">
				<strong>Welcome to</strong>
			</h1>
			<div className="logo">
				<b>
					m<span>ai</span>l<span>si</span>fy
				</b>
			</div>
		</div>
	);
};

export default Landing;
