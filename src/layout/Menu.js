import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import Pulsa from './pulsa/Pulsa.js';

export default class BurgerMenu extends React.Component {
    render() {
        return (
            <div id="outer-container" style={{ height: '100%' }}>
                <Menu left id="push" pageWrapId={ "page-wrap" }>
                    <a id="pulsa" className="bm-item" href="/pulsa"><span>Pulsa</span></a>
                    <a id="paket-data" className="bm-item" href="/paket-data"><span>Paket Data</span></a>
                    <a id="pln" className="bm-item" href="/pln"><span>PLN</span></a>
                    <a onClick={this.showSettings} className="menu-item--small" href=""><span>Settings</span></a>
                </Menu>
                <main id="page-wrap">
                    <Pulsa />
                </main>
            </div>
        );
    }
}