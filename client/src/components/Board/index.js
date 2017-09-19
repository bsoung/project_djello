import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Lists from '../Lists';
import CircularProgress from 'material-ui/CircularProgress';

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

class Board extends Component {
  render() {
    return (
     <div className="board">
			<div style={styles.boardBox}>
				{this.props.boardReducer.loading ? <CircularProgress size={80} thickness={5} /> : <Lists {...this.props} />}
			</div>

			<div style={styles.sidebarBox}>
				<Sidebar {...this.props} />
			</div>
		</div>
    );
  }
}

export default Board;

// 				{(!this.props.userReducer.user) && <Redirect to="/" push={true} />}