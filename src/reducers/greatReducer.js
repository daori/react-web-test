const testong = (state = "didodido", action) => {
    switch (action.type) {
      case 'CHANGE_ACTIVE_PAGE':
        return action.value
      default:
        return state
    }
}

export default testong