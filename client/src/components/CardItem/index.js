import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

export default class CardItem extends Component {
	handleTouchTap = () => {
		alert('You clicked the Chip.');
	}

	render() {
		return (
			<Chip onClick={this.handleTouchTap}>
				<Avatar src="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg" />
			  {this.props.name}
			</Chip>

		)
	}
}