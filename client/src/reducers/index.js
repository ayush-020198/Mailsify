import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	surveys: surveyReducer,
});
