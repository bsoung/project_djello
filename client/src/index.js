import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import RequireAuthentication from './hoc/RequireAuthentication';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


injectTapEventPlugin();

const app = (
	<Provider store={configureStore()}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/dashboard" component={RequireAuthentication(Dashboard)} />
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
