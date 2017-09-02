import { createStore } from 'redux';
import reducer from '../reducers'

let stores = createStore(reducer, {
    burgerMenu: {
        isOpen: false
    }
});

export default stores