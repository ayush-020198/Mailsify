import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<h1>This is the Dashboard</h1>
			<div className="fixed-action-btn">
				<Link
					to="/surveys/new"
					className="btn-floating btn-large waves-effect waves-light red"
				>
					<i className="large material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
