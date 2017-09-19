import React, { Component } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import NewCardButton from '../NewCardButton';
import './styles.css';


class List extends Component {

	handleTouchTap = () => {
		alert('You clicked the Chip.');
	}

	render() {
		const { form, userReducer, cardActions, listReducer, currentListId } = this.props;

		return (
				<div className="card">
					<Card>
				    <CardHeader
				      title={this.props.cardTitle}
				      avatar="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg"
				    />

				    <Divider />

						<Chip onClick={this.handleTouchTap}>
				      <Avatar src="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg" />
				      Single task
				    </Chip>

				    <Chip onClick={this.handleTouchTap}>
				      <Avatar src="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg" />
				      Single task
				    </Chip>

				    <Chip onClick={this.handleTouchTap}>
				      <Avatar src="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg" />
				      Single task
				    </Chip>

				    <CardActions>
				      <NewCardButton 
				      	dataForm={form}  
				      	user={userReducer.user}
				      	createNewCard={cardActions.createNewCard} 
				      	currentListId={currentListId}
				      />
				    </CardActions>
			  	</Card>
				</div>
  
			);
	}
}

export default List;

