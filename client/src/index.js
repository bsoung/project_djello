import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';

injectTapEventPlugin();

const app = (
	<Provider store={configureStore()}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
