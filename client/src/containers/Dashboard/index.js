import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Dashboard extends Component {
	static contextTypes = { 
			router: PropTypes.object
		}

	componentDidUpdate() {
		if (!this.props.userReducer.user) {
			this.context.router.history.push('/');
		}
	}

	handleLogout = () => {
		this.props.userActions.logoutUser();
	}

	render() {
		return (
			<div>
				Dashboard
				<button onClick={this.handleLogout}>Logout</button>
			</div>
		)
	}
}

export default Dashboard;