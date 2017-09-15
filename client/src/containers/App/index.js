import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Landing from '../../components/Landing';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { userActions } = this.props;

    userActions.fetchAllUsers().then(() => {
    }).catch(e => console.log)
  }

  render() {
    return (
      <div>
        <Landing {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
