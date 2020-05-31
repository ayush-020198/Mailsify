import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
	return (
		<div>
			<h5>Please Review Your Form</h5>
			<button className="white darken-3 btn" onClick={onCancel}>
				Back
			</button>
		</div>
	);
};

export default SurveyFormReview;
