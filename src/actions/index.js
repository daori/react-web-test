export const PULSA_MENU = 'PULSA_MENU'
export const DATA_PLAN_MENU = 'DATA_PLAN_MENU'
export const PLN_MENU = 'PLN_MENU'
export const CHANGE_PAGE = 'CHANGE_PAGE'

export const sideMenuClicked = (activePage, linkText) => ({
    type: activePage,
    active: true,
    linkText: linkText,
    activePage: activePage
})

export const updateActivePage = (activePage) => {
    return {
        type: CHANGE_PAGE,
        activePage: activePage
    }
}