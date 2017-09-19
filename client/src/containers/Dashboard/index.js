import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Boards from '../../components/Boards';
import { withRouter } from "react-router-dom";


const styles = {
	boardBox: {
		width: "85%",
		height: "99.7vh",
		float: "right"
	},

	sidebarBox: {
		width: "15%",
		height: "99.7vh"
	}
}

class Dashboard extends Component {
	componentDidMount() {
		this.props.userActions.checkCurrentUser().then(user => {
			if (!user) {
				this.props.history.replace('/');
			}
		})
	}

	render() {
		return (
			<div>
				<div style={styles.boardBox}>
					<Boards 
						{...this.props} 
					/>
				</div>

				<div style={styles.sidebarBox}>
					<Sidebar {...this.props} />
				</div>
			</div>
		)
	}
}

export default withRouter(Dashboard);			