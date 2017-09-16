import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as userActions from '../../actions/userActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Landing from '../../components/Landing';
import Dashboard from '../../containers/Dashboard';
import RequireAuthentication from '../../hoc/RequireAuthentication';

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

  componentDidUpdate() {
    userActions.checkCurrentUser();
  }

  render() {
    const AuthedDashboard = RequireAuthentication(Dashboard)

    return (
        <Router>
          <div>
            <Route exact path="/" render={() => <Landing {...this.props} />} />
            <Route path="/dashboard" render={() => <AuthedDashboard {...this.props} />} />
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


