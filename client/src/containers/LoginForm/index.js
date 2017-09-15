import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';

import asyncValidate from '../../services/AsyncValidate';

const validate = values => {
  const errors = {}
  const requiredFields = [
    'username',
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
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

const isEmpty = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

// register(formData.LoginForm.values)
const LoginForm = ({ handleSubmit, pristine, reset, submitting, register, formData }) => {
    const onSubmit = () => {
      register(formData.LoginForm.values);
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>
        <div>
          <Field name="username" component={renderTextField} label="Username" required="required" />
        </div>
        <div>
          <Field name="email" component={renderTextField} label="Email" required="required" />
        </div>
        <div>
          <Field name="password" type="password" component={renderTextField} label="Password" required="required" />
        </div>

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )

}


// class LoginForm extends Component {

// 	onHandleSend = () => {
// 		const { form, userActions, userReducer } = this.props;

// 		const formInput = form.LoginForm.values;
		
// 		userActions.registerUser(formInput)
// 			.then(() => {
// 			alert('saved!!!!')
// 		})
// 	}

// 	render() {
// 		console.log(this.props, 'props')
// 		const { handleSubmit, pristine, reset, submitting, sendValuesAction, userActions } = this.props
// 		return (
// 		    <form onSubmit={handleSubmit(this.onHandleSend)}>
// 		    	<h3>Register</h3>
// 		    	<div>
// 		        <Field name="username" component={renderTextField} label="Username" required="required" />
// 		      </div>
// 		      <div>
// 		        <Field name="email" component={renderTextField} label="Email" required="required" />
// 		      </div>
// 		      <div>
// 		        <Field name="password" type="password" component={renderTextField} label="Password" required="required" />
// 		      </div>

// 		      <div>
// 		        <button type="submit" disabled={pristine || submitting}>
// 		          Submit
// 		        </button>
// 		        <button type="button" disabled={pristine || submitting} onClick={reset}>
// 		          Clear Values
// 		        </button>
// 		      </div>
// 		    </form>
// 		  )
// 		}
// }

// const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => ({
//   userActions: bindActionCreators(userActions, dispatch)
// });

// LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default reduxForm({
  form: 'LoginForm', 
  validate,
  asyncValidate
})(LoginForm)









