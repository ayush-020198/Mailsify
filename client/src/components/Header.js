import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import '../css/Header.css';
import '../css/buttons/component.css';
import '../css/buttons/default.css';

class Header extends Component {
	componentDidMount() {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {});
		});
	}

	renderContent() {
		switch (this.props.auth) {
			case null:
				return <div className="loadingdiv"></div>;
			case false:
				return (
					<li>
						<a href="auth/google" className="signin">
							Sign in With Google
						</a>
					</li>
				);
			default:
				return (
					<div>
						<li>
							<Payments />
						</li>
						<li className="credits">
							Credits: {this.props.auth.credits}
						</li>
						<li>
							<a href="api/logout" className="signin">
								Logout
							</a>
						</li>
					</div>
				);
		}
	}

	render() {
		return (
			<div>
				<nav className="nav-wrapper myStyle">
					<div className="container">
						<Link
							to={this.props.auth ? '/surveys' : '/'}
							className="logo black-text brand-logo"
						>
							Mailsify
						</Link>
						<a
							href="menu"
							className="sidenav-trigger barnav"
							data-target="mobile-links"
						>
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down credentials">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
				<ul id="mobile-links" className="sidenav">
					{this.renderContent()}
				</ul>
			</div>
		);
	}
}

function mapStatetoProps({ auth }) {
	return { auth };
}

export default connect(mapStatetoProps)(Header);
