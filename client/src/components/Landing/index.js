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
		this.props.userActions.checkCurrentUser().then(user => {
			if (user) {
				this.props.history.replace('/dashboard');
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.userReducer.user) {
			this.props.history.replace('/dashboard');
		}
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
		console.log(this.props.userReducer, 'user reducer')
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
					formData={form}
					user={userReducer.user}
					loading={userReducer.loading}
				/>
			</MuiThemeProvider>
		)

		return (
			<div className="parallax">
		    <div id="group4" className="parallax__group">
		    	<div className="parallax__layer parallax__layer--fore">
		    		<header className="header">
							<p>Djello</p>
							<a onClick={this.onClickScrollRegister} >Register</a>
							<a onClick={this.onClickScrollLogin} >Login</a>
						</header>
		        <div className="title foreground-box">
		        	<h1>Djello</h1>
		        </div>
		      </div>
		      <div className="parallax__layer parallax__layer--base">
		        <div className="title">base</div>
		      </div>
		      <div className="parallax__layer parallax__layer--back">
		        <div className="title">background</div>
		      </div>
		      <div className="parallax__layer parallax__layer--deep">
		        <div className="title">deep background</div>
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

	