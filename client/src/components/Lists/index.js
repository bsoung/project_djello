import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewBoardButton from '../NewBoardButton';
import List from '../List';
import NewListButton from '../NewListButton';

import './styles.css'

const dummyList = [

];

for (let i = 1; i <= 10; i++) {
  dummyList.push({
    _id: `23fjlfkjifl23jf${i}`,
    name: `super list ${i}`,
    author: `jon${i}`,
    cards: []
  })
}

class Lists extends Component {
  render() {
    const renderLists = !dummyList.length ? <p>You have not created any Lists yet!</p> : dummyList.map((list) => (
            <div key={list._id}>
               <List cardTitle={list.name} authorName={list.author} />
            </div>
          ))

    return (
      <div className="lists">

        <NewListButton 
          // dataForm={form} 
          // user={userReducer.user} 
          // createNewBoard={boardActions.createNewBoard} 
        />
        <GridList
          cellHeight={180}
        >
          <Subheader>Lists</Subheader>

          <div className="lists-box">
            {renderLists}
          </div>
          
        </GridList>
      </div>
    );
  }
}

export default Lists;