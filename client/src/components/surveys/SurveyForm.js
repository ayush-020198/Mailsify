import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';
class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
					)}
					style={{ position: 'relative', top: '100px' }}
				>
					{this.renderFields()}
					<button
						type="submit"
						className="teal right btn-flat white-text"
					>
						Next
					</button>
					<Link to="/surveys">
						<button
							type="submit"
							className="red left btn-flat white-text"
						>
							Cancel
						</button>
					</Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(formFields, ({ name, noValue }) => {
		errors.recipients = validateEmails(values.recipients || '');

		if (!values[name]) {
			errors[name] = noValue;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);
