import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title',
		noValue: 'You must enter a title!',
	},
	{
		label: 'Subject Line',
		name: 'subject',
		noValue: 'You must enter a subject!',
	},
	{
		label: 'Email Body',
		name: 'body',
		noValue: 'You must enter something in the body!',
	},
	{
		label: 'Recipient List',
		name: 'emails',
		noValue: 'You must enter a valid email!',
	},
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
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
					onSubmit={this.props.handleSubmit((values) =>
						console.log(values)
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

	_.each(FIELDS, ({ name, noValue }) => {
		if (!values[name]) {
			errors[name] = noValue;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
})(SurveyForm);
