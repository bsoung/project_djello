import React, { Component } from 'react';
import './styles.css';
import {List, ListItem} from 'material-ui/List';
import { Redirect } from 'react-router-dom';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class Sidebar extends Component {
  handleLogout = () => {
    this.props.userActions.logoutUser();
  }

  render() {
    return (
      <div className="sidebar">
        <List>
          <ListItem primaryText="Profile" leftIcon={<ActionAssignment />} />
          <ListItem primaryText="Boards" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Teams" leftIcon={<ContentSend />} />
          <ListItem primaryText="Feed" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Test" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Test" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Test" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Test" rightIcon={<ActionInfo />} />
          <ListItem onClick={this.handleLogout} primaryText="Logout" rightIcon={<ActionInfo />} />
        </List>
        
      </div>
    );
  }
} 

export default Sidebar;

// {(!this.props.userReducer.user && window.location.pathname === '/dashboard') && <Redirect to="/" push={true} />}

