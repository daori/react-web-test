import {connect} from 'react-redux'
import SideMenuLink from '../components/SideMenuLink'
import * as action from '../../actions'
import {action as toggleMenu} from 'redux-burger-menu';



const mapStateToProps = (state, ownProps) => {
    return {
        type:state.type,
        active:true,
        linkText: ownProps.linkText,
        activePage: ownProps.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
        onLinkClicked: () => {
            dispatch(action.sideMenuClicked(ownProps.activePage, ownProps.linkText))
            dispatch(action.updateActivePage(ownProps.activePage))
            dispatch(toggleMenu(false, 'primary'))

        }
    }
}

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuLink)
export default SideMenu