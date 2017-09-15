import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
	class Authentication extends Component {
		// get access to our router
		static contextTypes = { 
			router: PropTypes.object
		}

		componentWillMount() {
			if (localStorage.getItem('userToken') === null) {
				this.context.router.history.push('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (localStorage.getItem('userToken') === null) {
				this.context.router.history.push('/');
			}
		}

		render() {
			console.log('what is props???', this.props)
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = state => state;

	return connect(mapStateToProps)(Authentication);
}