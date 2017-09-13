import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

injectTapEventPlugin();

const app = (
	<Provider store={configureStore()}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
