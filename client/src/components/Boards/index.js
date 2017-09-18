import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewBoardButton from '../NewBoardButton';
import { Link } from 'react-router-dom';

import './styles.css';

class Boards extends Component {
  componentDidMount() {
    const { boardReducer, boardActions, userReducer } = this.props;

    if (userReducer.user) {
      console.log(userReducer.user, 'who is the user in board')
      boardActions.setUserBoards({ authorId: userReducer.user.id });
    }
  }

  componentWillReceiveProps(nextProps) { 
    const { boardReducer, boardActions, userReducer } = this.props;

    if (boardReducer.boards.length !== nextProps.boardReducer.boards.length) {
      boardActions.setUserBoards({ authorId: userReducer.user.id });
    }
  }

  render() {
    const { form, userReducer, boardActions, boardReducer } = this.props;
    
    // render our board
    const renderBoards = boardReducer.boards.map(board => {
      return (
        <GridTile
          key={board._id}
          title={board.name}
          subtitle={<span>by <b>{board.author.username}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          className="gridtile"
        >
          <Link to={`/dashboard/${board._id}`} onClick={() => boardActions.setCurrentBoard(board._id)}><img src='http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg' /></Link>
        </GridTile>
      )
    })

    return (
      <div className="boards">
        <NewBoardButton 
          dataForm={form} 
          user={userReducer.user} 
          createNewBoard={boardActions.createNewBoard} 
        />

        <GridList
          cellHeight={180}
          className="gridlist"
        >
          <Subheader>Boards</Subheader>
          {renderBoards}
        </GridList>
      </div>
    );
  }
}



//  {renderBoards}

export default Boards;