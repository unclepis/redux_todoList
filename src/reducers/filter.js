export const filter = (state = 'All', action) => {
    switch (action.type) {
        case 'set_Filter':
            return action.filter
        default:
            return state
    }
}
