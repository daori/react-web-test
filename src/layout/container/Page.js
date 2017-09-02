import { connect } from 'react-redux'
import SwitchablePage from '../components/SwitchablePage'
import * as action from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        type: action.CHANGE_PAGE,
        activePage: state.activePage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateActivePage: () => {
            // dispatch(action.updateActivePage(ownProps.activePage))
        }
    }
}

const Page = connect(mapStateToProps, mapDispatchToProps)(SwitchablePage)
export default Page