let nextTodoId = 0;

export const pulsaMenu = text => {
    return {
        type:'PULSA_MENU',
        id:nextTodoId++,
        text
    }
}

export const toggleMenu = id => {
    return {
        type:'TOGGLE_MENU',
        id
    }
}