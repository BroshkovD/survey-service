import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import map from 'lodash/map';

import formFields from './formFields';

import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = map(formFields, ({ name, lable }) => {
		return (
			<div key={name}>
				<label>{lable}</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
				Back
			</button>

			<button
				onClick={() => submitSurvey(formValues, history)}
				className="green white-text btn-flat right"
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview));