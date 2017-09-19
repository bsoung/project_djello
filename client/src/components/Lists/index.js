import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import List from '../List';
import NewListButton from '../NewListButton';
import { withRouter } from 'react-router-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import _ from 'lodash';
import Test from './Test';

import './styles.css'

// PLAN OF ATTACK
// 1. add sortable list +
// 2. wrap all teh things in hoc's

const SortableItem = SortableElement((props) => 
  <div style={{ float: "left" }}>
    <List 
      style={{ float: "left" }} 
      cardTitle={props.list.name} 
      key={props.list._id} {...props} 
      currentListId={props.list._id} />
  </div>
);

const SortableList = SortableContainer((props) => {
      return (

      <div>
        {props.items.map((list, index) => {
               return <SortableItem key={`item-${index}`} index={index}  {...props} list={list} />
              })}      
          
      </div> 
      );     
});


class Lists extends Component {
  // state = { cards: null }

  componentDidMount() {
    const { listActions, userActions, cardActions, userReducer, history } = this.props;
    const currentBoardId = window.location.pathname.split('/')[2];

    listActions.setCurrentListFromBoard(currentBoardId)
      .then(response => {
        return userActions.checkCurrentUser();
      })
      
      .then(user => {
        if (user.result === null) {
          this.props.history.replace('/');
        }

        return cardActions.setCurrentCards();
      })    
      .then(cards => {
        console.log(cards, 'card?')
 
      })
  }

  componentWillReceiveProps(nextProps) {
    const { boardActions, listReducer } = this.props;
    const currentBoardId = window.location.pathname.split('/')[2];

    if (!this.props.listReducer.loading) {
      const isEqual = _.isEqual(this.props.listReducer.lists, nextProps.listReducer.lists);

      if (!isEqual) {
        const payload = {
          newList: nextProps.listReducer.lists
        }

        boardActions.updateCurrentBoard(payload, currentBoardId);
      }
    }
  }

  render() {
    const { form, userReducer, listActions, listReducer, boardReducer } = this.props;

    const renderLists = <SortableList items={listReducer.lists} onSortEnd={listActions.setNewPositionLists} axis="xy" {...this.props} />

    return (
      <div className="lists">
        <NewListButton 
          dataForm={form} 
          user={userReducer.user} 
          board={boardReducer.board}
          createNewList={listActions.createNewList} 
        />
        <GridList
          cellHeight={180}
        >
          <Subheader>Lists</Subheader>

          <div className="lists-box">
            {(listReducer.loading) ? '' : renderLists}
          </div>
          
        </GridList>
      </div>
    );
  }
}

export default withRouter(Lists);