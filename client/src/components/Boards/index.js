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
  handeNewBoard = () => {

  }

  render() {
    console.log(this.props, 'in board')
    return (
      <div className="boards">
        <NewBoardButton />
        <GridList
          cellHeight={180}
          className="gridlist"
        >
          <Subheader>Boards</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.title}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              className="gridtile"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default GridListExampleSimple;