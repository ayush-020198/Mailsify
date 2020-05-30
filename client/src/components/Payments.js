import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Header.css';
import '../css/buttons/component.css';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Mailsify"
				description="Payment Gateway to add credits"
				amount={50000}
				currency="INR"
				token={(token) => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn pink credits">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
