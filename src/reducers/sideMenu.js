import * as action from '../actions'

export const PULSA_TEXT = 'Pulsa'
export const DATA_PLAN_TEXT = 'Data plan'
export const PLN_TEXT = 'PLN'

function initialState() {
    return {
        type: action.PULSA_MENU,
        active: true,
        linkText: PULSA_TEXT,
        activePage: action.PULSA_MENU
    }
}
const sideMenu = (state = initialState(), action) => {
    switch (action.type) {
        case action.PULSA_MENU:
            return {
                ...state,
                type: action.PULSA_MENU,
                active: true,
                linkText:PULSA_TEXT,
                activePage: action.activePage
            }
        case action.DATA_PLAN_MENU:
            return {
                ...state,
                type: action.DATA_PLAN_MENU,
                active: true,
                linkText: DATA_PLAN_TEXT,
                activePage: action.activePage
            }
        case action.PLN_MENU:
            return {
                ...state,
                type: action.PLN_MENU,
                active: true,
                linkText: PLN_TEXT,
                activePage: action.activePage
            }

        default:
            return state
    }
}

export default sideMenu