import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Boards from '../../components/Boards';
import { Redirect } from 'react-router-dom';

const styles = {
	boardBox: {
		width: "85%",
		height: "99.7vh",
		float: "right"
	},

	sidebarBox: {
		width: "15%",
		border: "1px solid black",
		height: "99.7vh"
	}
}

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div style={styles.boardBox}>
					<Boards {...this.props} />
				</div>

				<div style={styles.sidebarBox}>
					<Sidebar {...this.props} />
				</div>
				{(!this.props.userReducer.user && window.location.pathname === '/dashboard') && <Redirect to="/" push={true} />}
			</div>
		)
	}
}

export default Dashboard;			