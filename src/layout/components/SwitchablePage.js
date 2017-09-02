import React from 'react'
import Pulsa from './pulsa/Pulsa'
import Pln from './pln/Pln'
import Dataplan from './dataplan/Dataplan'
import * as action from '../../actions'
import PropTypes from 'prop-types'

class SwitchablePage extends React.Component {

    render() {
        const { activePage } = this.props.activePage
        
        switch (activePage){
            case action.PULSA_MENU: {
                return (<Pulsa />)
            }
            case action.DATA_PLAN_MENU: {
                return (<Dataplan />)
            }
            case action.PLN_MENU: {
                return (<Pln />)
            }
            default :
                return (<Pulsa />)
        }
    
    }
}

SwitchablePage.PropTypes = {
    id: PropTypes.string.isRequired,
    activePage: PropTypes.string.isRequired,
    updateActivePage: PropTypes.func.isRequired
}

export default SwitchablePage