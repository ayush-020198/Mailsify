import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} style={{ paddingTop: '50px' }}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please Review Your Form</h5>
			{reviewFields}
			<button
				className="white-text btn-flat red"
				style={{ margin: '100px 0px' }}
				onClick={onCancel}
			>
				Back
			</button>
			<button
				className="white-text right teal btn-flat"
				style={{ margin: '100px 0px' }}
				onClick={() => submitSurvey(formValues, history)}
			>
				<i className="material-icons right">email</i>
				Submit Survey
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
