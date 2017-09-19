import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignupForm from '../../containers/SignupForm';
import LoginForm from '../../containers/LoginForm';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withRouter } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
	state = {
		showLogin: false,
		showRegister: true
	}

	componentDidMount() {
		this.props.userActions.checkCurrentUser();
	}

	onClickScrollRegister = (e) => {
			const loginNode = ReactDOM.findDOMNode(this.refs.accountBox)
			loginNode.scrollIntoView();

			this.setState({
				showRegister: true,
				showLogin: false
			})
		}
	

	onClickScrollLogin = (e) => {
		const loginNode = ReactDOM.findDOMNode(this.refs.accountBox)
		loginNode.scrollIntoView();

		this.setState({
			showRegister: false,
			showLogin: false
		})
	}

	render() {
		const { userActions, form, userReducer } = this.props;

		const registerForm = (
				<MuiThemeProvider>
        		<SignupForm 
        			register={userActions.registerUser}
        			formData={form}
        			user={userReducer.user}
        			loading={userReducer.loading}
        		/>
		    </MuiThemeProvider>
			)

		const loginForm = (
			<MuiThemeProvider>
				<LoginForm 
					login={userActions.loginUser} 
					setUserError={userActions.setUserError}
					formData={form}
					userReducer={userReducer}
					loading={userReducer.loading}
				/>
			</MuiThemeProvider>
		)

		return (
			<div className="parallax">
		    <div id="group4" className="parallax__group">
		    	<div className="parallax__layer parallax__layer--fore">
		    		<header className="header">
							<div>
								<a onClick={this.onClickScrollRegister} ><p className="auth-text">Register</p></a>
							</div>
							<div>
								<a onClick={this.onClickScrollLogin} ><p className="auth-text">Login</p></a>
							</div>
						</header>
		        <div className="title foreground-box">
		        	<h1>Djello</h1>
		        </div>
		      </div>
		      <div className="parallax__layer parallax__layer--base">
		        <div className="title">base</div>
		      </div>
		      <div className="parallax__layer parallax__layer--back">
		        <div className="title">back</div>
		      </div>
		      <div className="parallax__layer parallax__layer--deep">
		        <div className="title">DEEPER</div>
		      </div>

		    </div>
		    <div id="group5" className="parallax__group" ref="accountBox">
		      <div className="parallax__layer parallax__layer--fore">
		        <div className="title register-box">
		        	{this.state.showRegister ? registerForm : loginForm}
		        </div>
		      </div>
		      <div className="parallax__layer parallax__layer--base">
		        <div className="title">Base Layer</div>
		      </div>
		    </div>
		    <div id="group6" className="parallax__group">
		      <div className="parallax__layer parallax__layer--back">
		        <div className="title">Background Layer</div>
		      </div>
		      <div className="parallax__layer parallax__layer--base">
		        <div className="title">Base Layer</div>
		      </div>
		    </div>
		    <div id="group7" className="parallax__group">
		      <div className="parallax__layer parallax__layer--base">
		        <div className="title">Base Layer</div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default withRouter(Landing);

/*
<div className="parallax">
	    <div id="group1" className="parallax__group">
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">
	        	<h1>Djello</h1>
	        </div>
	      </div>
	    </div>
	    <div id="group2" className="parallax__group">
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">
	        	<div className="about-box">
	        		About Djello
	        	</div>
	        </div>
	      </div>
	      <div className="parallax__layer parallax__layer--back">
	        <div className="title">Background Layer</div>
	      </div>
	    </div>
	    <div id="group3" className="parallax__group">
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Base Layer</div>
	      </div>
	    </div>
	    <div id="group4" className="parallax__group">
	    	<div className="parallax__layer parallax__layer--fore">
	        <div className="title">Foreground Layer</div>
	      </div>
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Base Layer</div>
	      </div>
	      <div className="parallax__layer parallax__layer--back">
	        <div className="title">Background Layer</div>
	      </div>
	      <div className="parallax__layer parallax__layer--deep">
	        <div className="title">Deep Background Layer</div>
	      </div>
	    </div>
	    <div id="group5" className="parallax__group">
	      <div className="parallax__layer parallax__layer--fore">
	        <div className="title">Foreground Layer</div>
	      </div>
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Base Layer</div>
	      </div>
	    </div>
	    <div id="group6" className="parallax__group">
	      <div className="parallax__layer parallax__layer--back">
	        <div className="title">Background Layer</div>
	      </div>
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Base Layer</div>
	      </div>
	    </div>
	    <div id="group7" className="parallax__group">
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Base Layer</div>
	      </div>
	    </div>
	  </div>
 */

	