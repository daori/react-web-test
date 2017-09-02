import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import stores from './store'

ReactDOM.render(
    <Provider store={stores}>
        <App />
    </Provider>, document.getElementById('app'));
registerServiceWorker();