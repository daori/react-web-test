import * as action from '../actions'
export const DEFAULT_ACTIVE_PAGE = action.PULSA_MENU
export const ACTIVE_PAGE_ACTION = "CHANGE_PAGE"

function initialState() {
    return {
        type: ACTIVE_PAGE_ACTION,
        activePage: DEFAULT_ACTIVE_PAGE
    }
}
const activePage = (state = initialState(), action) => {
    switch (action.type) {
        case "CHANGE_PAGE": {
            return {
                ...state,
                type: "CHANGE_PAGE",
                activePage: action.activePage

            }

        }
        default:
            return state
    }

}

export default activePage