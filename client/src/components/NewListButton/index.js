import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from '../../services/AsyncValidate';

import './styles.css';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  return errors;
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />

class NewListButton extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNewList = () => {
    const { dataForm, createNewList, user, board } = this.props;
    
    const payload = {
      boardId: board._id,
      data: {
        name: dataForm.NewListForm.values.name,
        author: user.id,
        parent: board._id
      } 
    }

    createNewList(payload)
      .then(() => { this.handleClose(); })
      .catch((e) => { console.log(e.stack) })
  }

  render() {
    const { pristine, reset, submitting } = this.props;


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => { reset(); this.handleClose(); }}
        key={'btn1'}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        disabled={pristine || submitting}
        onClick={this.handleNewList}
        key={'btn2'}
      />,
    ];

    return (
      <div> 
        <FloatingActionButton onClick={this.handleOpen} className="list-btn-box">
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Create a new List"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >

        <form>
          <div>
            <Field name="name" component={renderTextField} label="name" required="required" />
          </div>

          <div>
            {actions}
          </div>
        </form>

        </Dialog>
      </div>
    );
  }
}

export default reduxForm({
  form: 'NewListForm', 
  validate,
  asyncValidate
})(NewListButton)

