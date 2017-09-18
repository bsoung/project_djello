import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import * as userActions from '../../actions/userActions';
import * as boardActions from '../../actions/boardActions';
import Landing from '../../components/Landing';
import Board from '../../components/Board';
import Dashboard from '../../containers/Dashboard';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { userActions, userReducer } = this.props;

    if (userReducer.user !== null) {
      return;
    }

    userActions.checkCurrentUser();
  }

  componentWillReceiveProps(nextProps) { 
    userActions.checkCurrentUser();
  }

  render() {
    // TODO error: You tried to redirect to the same route you're currently on:
    return (
        <Router>
          <div>
            <Route exact path="/" render={() => <Landing {...this.props} />} />
            <Route exact path="/dashboard" render={() => <Dashboard {...this.props} />} />
            <Route path="/dashboard/:boardId" render={() => <Board {...this.props} />} />
            {(this.props.userReducer.user && window.location.pathname === '/') && <Redirect to="/dashboard" push={true} />}
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
  boardActions: bindActionCreators(boardActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);





