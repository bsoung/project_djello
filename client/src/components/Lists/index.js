import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import List from '../List';
import NewListButton from '../NewListButton';
import { withRouter } from 'react-router-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import './styles.css'

// PLAN OF ATTACK
// 1. add sortable list +
// 2. wrap all teh things in hoc's

const SortableItem = SortableElement((props) => <List style={{ float: "left" }} cardTitle={props.list.name} key={props.list._id} {...props} currentListId={props.list._id} />);

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
  componentDidMount() {
    const { listActions, userActions, userReducer, history } = this.props;
    const currentBoardId = window.location.pathname.split('/')[2];

    listActions.setCurrentLists({ boardId: currentBoardId })
      .then(() => {
        return userActions.checkCurrentUser();
      })
      .then(user => {
        if (user.result === null) {
          this.props.history.replace('/');
        }
      })
  }

  //Roadmap to modify reducer
  // create new action props.dispatch(oldIndex, newIndex)
  //  //

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.listReducer.list) {

  //   // }
  // }

  // TODO: redux / componentWillReceiveProps
  // onSortEnd = ({oldIndex, newIndex}) => {
  //   this.setState({
  //     items: arrayMove(this.state.items, oldIndex, newIndex),
  //   });
  // };

  render() {
    const { form, userReducer, listActions, listReducer, boardReducer } = this.props;

    const renderLists = <SortableList items={listReducer.lists} onSortEnd={this.onSortEnd} axis="x" {...this.props} />

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
            {listReducer.loading ? '' : renderLists}
          </div>
          
        </GridList>
      </div>
    );
  }
}

export default withRouter(Lists);