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
    console.log(userActions, 'actions');
    userActions.fetchAllUsers().then(() => {
      console.log('fetched!1')
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

      // <MuiThemeProvider>
      //   <div className="App">
      //     <div className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h2>Welcome to React</h2>
      //     </div>
      //     <p className="App-intro">
      //       To get started, edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <RaisedButton label="Material UI" />
      //   </div>
      // </MuiThemeProvider>