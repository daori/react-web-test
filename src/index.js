import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'
import reducer from './reducers'
import App from './App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer)
console.log("DAVID " + store.getState().testong)

ReactDOM.render(
    <Provider store={store}> 
        <App /> 
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();
