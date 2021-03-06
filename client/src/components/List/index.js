import React, { Component } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import NewCardButton from '../NewCardButton';
import CardItem from '../CardItem';
import './styles.css';


class List extends Component {


	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.cardReducer.cards.length !== nextProps.cardReducer.cards.length) {
	// 		console.log('deleted!')
	// 	}
	// }

	render() {
		const { form, userReducer, cardActions, cardReducer, currentListId } = this.props;

		const renderCards = cardReducer.cards
													.filter(card => card.parent === currentListId)
													.map(card => <CardItem 
																					key={card._id} 
																					name={card.name} 
																					cardId={card._id}
																					deleteCurrentCard={cardActions.deleteCurrentCard}
																					/>)


		return (
				<div className="card">
					<Card>
				    <CardHeader
				      title={this.props.cardTitle}
				      avatar="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg"
				    />

				    <Divider />

						{renderCards}

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

