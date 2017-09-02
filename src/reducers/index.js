import {createStore, combineReducers} from 'redux';
import {reducer as burgerMenu} from 'redux-burger-menu';
import sideMenu from './sideMenu'
import activePage from './activePage'


export default combineReducers ({
  burgerMenu,
  sideMenu,
  activePage
})