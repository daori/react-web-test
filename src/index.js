import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App store />
    </Provider>, document.getElementById('app'));
registerServiceWorker();
