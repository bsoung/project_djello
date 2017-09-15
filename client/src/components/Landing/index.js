import React from 'react';
import Header from '../Header';
import LoginForm from '../../containers/LoginForm';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './Landing.css';

export default ({ userActions, form }) => {
	console.log(userActions, 'actions', form, 'form')
	return (
		<div className="parallax">
	    <div id="group4" className="parallax__group">
	    	<div className="parallax__layer parallax__layer--fore">
	    		<Header />
	        <div className="title foreground-box">
	        	<h1>Djello</h1>
	        </div>
	      </div>
	      <div className="parallax__layer parallax__layer--base">
	        <div className="title">Layer1</div>
	      </div>
	      <div className="parallax__layer parallax__layer--back">
	        <div className="title">Layer2</div>
	      </div>
	      <div className="parallax__layer parallax__layer--deep">
	        <div className="title">Layer3</div>
	      </div>

	    </div>
	    <div id="group5" className="parallax__group">
	      <div className="parallax__layer parallax__layer--fore">
	        <div className="title login-box">
	        	<MuiThemeProvider>
	        		<LoginForm 
	        			register={userActions.registerUser}
	        			formData={form}
	        		/>
	        	</MuiThemeProvider>
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

	