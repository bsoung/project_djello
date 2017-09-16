import React, { Component } from 'react';

class Dashboard extends Component {
	handleLogout = () => {
		this.props.userActions.logoutUser();
		localStorage.removeItem("userToken");
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