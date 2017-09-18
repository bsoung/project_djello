import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewBoardButton from '../NewBoardButton';

import './styles.css';

// TODO: Each obj in this arr will be a Board from db
const tilesData = [
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello1',
    author: 'jill111',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello2',
    author: 'pashminu',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello3',
    author: 'Danson67',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello4',
    author: 'fancycrave1',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello5',
    author: 'Hans',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello6',
    author: 'fancycravel',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello7',
    author: 'jill111',
  },
  {
    img: 'http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg',
    title: 'Djello8',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridListExampleSimple extends Component {
  componentDidMount() {
    const { boardReducer, boardActions, userReducer } = this.props;

    if (userReducer.user && !boardReducer.boards.length) {
      boardActions.setUserBoards(userReducer.user.boards);
    }
  }

  componentWillReceiveProps(nextProps) { 
    const { boardReducer, boardActions, userReducer } = this.props;

    if (boardReducer.board !== nextProps.boardReducer.board) {
      console.log('hit!!!')
      boardActions.setUserBoards(userReducer.user.boards);
    }
  }

  render() {
    console.log(this.props, 'in board')
    return (
      <div className="boards">
        <NewBoardButton 
          dataForm={this.props.form} 
          user={this.props.userReducer.user} 
          createNewBoard={this.props.boardActions.createNewBoard} 
        />
        <GridList
          cellHeight={180}
          className="gridlist"
        >
          <Subheader>Boards</Subheader>

          {!this.props.boardReducer.boards.length ? <p>You have not created any boards yet!</p> : this.props.boardReducer.boards.map((board) => (
            <GridTile
              key={board.name}
              title={board.name}
              subtitle={<span>by <b>{board.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              className="gridtile"
            >
              <img src='http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg' />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridListExampleSimple;