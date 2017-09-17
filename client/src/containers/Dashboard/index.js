import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {

	handleLogout = () => {
		this.props.userActions.logoutUser();
	}

	render() {
		return (
			<div>
				Dashboard
				<button onClick={this.handleLogout}>Logout</button>
				{(!this.props.userReducer.user && window.location.pathname === '/dashboard') && <Redirect to="/" push={true} />}
			</div>
		)
	}
}

export default Dashboard;