import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

const List = ({ cardTitle, boardReducer }) => (
  <Card className="card">
    <CardHeader
      title={cardTitle}
      avatar="http://blogs.discovermagazine.com/80beats/files/2011/07/Jello.jpg"
    />
    <CardActions>
      <FlatButton label="Add a card" />
    </CardActions>
  </Card>
);

export default List;