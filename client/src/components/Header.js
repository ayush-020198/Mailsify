import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Loading';
			case false:
				return (
					<li>
						<a href="auth/google">Sign in With Google</a>
					</li>
				);
			default:
				return (
					<div>
						<li>
							<Payments />
						</li>
						<li>
							<a href="api/logout">Logout</a>
						</li>
					</div>
				);
		}
	}

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link
							to={this.props.auth ? '/surveys' : '/'}
							className="brand-logo"
						>
							Mailsify
						</Link>
						<ul
							id="nav-mobile"
							className="right hide-on-med-and-down"
						>
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

function mapStatetoProps({ auth }) {
	return { auth };
}

export default connect(mapStatetoProps)(Header);
