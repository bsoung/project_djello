import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from '../../services/AsyncValidate';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

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

/**
 * Dialog content can be scrollable.
 */
class NewBoardButton extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNewBoard = () => {
    const { dataForm, createNewBoard, user } = this.props;

    const payload = {
      email: user.email,
      data: {
        name: dataForm.NewBoardForm.values.name,
        author: user.id
      } 
    }

    console.log(payload, 'what is payload')

    createNewBoard(payload)
      .then(() => { this.handleClose(); })
      .catch((e) => { alert(e.message)})
  }

  render() {
    const {handleSubmit, pristine, reset, submitting } = this.props;

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
        onClick={this.handleNewBoard}
        key={'btn2'}
      />,
    ];

    return (
      <div> 
        <FloatingActionButton onClick={this.handleOpen} className="floating-btn-box">
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="Create a new board"
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
  form: 'NewBoardForm', 
  validate,
  asyncValidate
})(NewBoardButton)

