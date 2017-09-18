import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Lists from '../Lists';

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
	// componentDidMount() {

	// }

  render() {
  	console.log(this.props.boardReducer, 'boardReducer')
    return (
     <div className="board">
				<div style={styles.boardBox}>
					<Lists />
				</div>

				<div style={styles.sidebarBox}>
					<Sidebar {...this.props} />
				</div>
			</div>
    );
  }
}

export default Board;