import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import List from '../List';
import NewListButton from '../NewListButton';
import { withRouter } from 'react-router-dom';

import './styles.css'

class Lists extends Component {
  componentDidMount() {
    const { listActions, userActions, userReducer, history } = this.props;
    const currentBoardId = window.location.pathname.split('/')[2];

    listActions.setCurrentLists({ boardId: currentBoardId })
      .then(() => {
        return userActions.checkCurrentUser();
      })
      .then(user => {
        if (!user) {
          this.props.history.replace('/');
        }
      })
  }

  render() {
    const { form, userReducer, listActions, listReducer, boardReducer } = this.props;

    const renderLists = listReducer.lists.map((list) => {
           return <List cardTitle={list.name} key={list._id} />
          })

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