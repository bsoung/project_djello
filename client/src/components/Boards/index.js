import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import NewBoardButton from '../NewBoardButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Link, withRouter } from 'react-router-dom';

import './styles.css';

class Boards extends Component {
  componentDidMount() {
    const { boardActions, userActions, userReducer, history } = this.props;

    userActions.checkCurrentUser().then(user => {
      if (!user) {
        history.replace('/');
        return;
      }
      
      boardActions.setUserBoards({ authorId: user.id });
    })

  }

  render() {
    const { form, userReducer, boardActions, boardReducer } = this.props;
    // render our board
    const renderBoards = boardReducer.boards.map(board => {
      return (
        <GridTile
          key={board._id}
          title={board.name}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          className="gridtile"
        >
          <Link to={`/dashboard/${board._id}`} onClick={() => boardActions.setCurrentBoard(board._id)}><img src='http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg' alt="alt" /></Link>
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
          {this.props.boardReducer.loading ? <CircularProgress size={80} thickness={5} /> : renderBoards}
        </GridList>
      </div>
    );
  }
}

export default withRouter(Boards);