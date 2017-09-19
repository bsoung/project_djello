import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from '../../components/Landing';
import Board from '../../components/Board';
import Dashboard from '../../containers/Dashboard';

// redux actions
import * as userActions from '../../actions/userActions';
import * as boardActions from '../../actions/boardActions';
import * as listActions from '../../actions/listActions';
import * as cardActions from '../../actions/cardActions';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" render={() => <Landing {...this.props} />} />
            <Route exact path="/dashboard" render={() => <Dashboard {...this.props} />} />
            <Route path="/dashboard/:boardId" render={() => <Board {...this.props} />} />
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
  boardActions: bindActionCreators(boardActions, dispatch),
  listActions: bindActionCreators(listActions, dispatch),
  cardActions: bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



