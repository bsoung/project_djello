import React from 'react';
import './Header.css';

export default ({ loginUser }) => {
	console.log(loginUser, '???')
	return (
		<header className="header">
			<p>Djello</p>
			<a>Login</a>
		</header>
	);
}