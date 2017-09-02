import React, { Component } from 'react';
import Menu from './reduxBurgerMenu'
import Page from './container/Page'
import SideMenu from './container/SideMenu'
import * as action from '../actions'

class BurgerMenu extends Component {
    render() {
        return (
            <div id="outer-container" style={{ height: '100%' }}>
                <Menu left id="push" pageWrapId={"page-wrap"}>
                    <SideMenu activePage={action.PULSA_MENU} linkText="Pulsa"  />
                    <SideMenu activePage={action.DATA_PLAN_MENU} linkText="Data Plan" />
                    <SideMenu activePage={action.PLN_MENU} linkText="PLN" />
                </Menu>
                <main id="page-wrap">
                    <Page activePage={action.PULSA_MENU}/>
                </main>
            </div>
        );
    }
}

export default BurgerMenu;