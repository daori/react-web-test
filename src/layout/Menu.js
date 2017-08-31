import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import Pulsa from './pulsa/Pulsa.js';
import { pulsaMenu } from '../actions'

// export default reduxBurgerMenu(Menu);

export default class BurgerMenu extends React.Component {
    render() {
        return (
            <div id="outer-container" style={{ height: '100%' }}>
                <Menu left id="push" pageWrapId={"page-wrap"}>
                    <a onClick={e => {
                        e.preventDefault();
                        { console.log('xxx') }
                    }
                    } id="pulsa" className="bm-item" href="/pulsa"><span>Pulsa</span></a>
                    <a id="paket-data" className="bm-item" href="/paket-data"><span>Paket Data</span></a>
                    <a id="pln" className="bm-item" href="/pln"><span>PLN</span></a>
                </Menu>
                <main id="page-wrap">
                    <Pulsa />
                </main>
            </div>
        );
    }
}