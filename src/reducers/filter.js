export const filter = (state = 'All', action) => {
    switch (action.type) {
        case 'set_Filter':
            return action.payload
        case 'load_item':
            if (JSON.parse(localStorage.getItem('state'))) {
                return JSON.parse(localStorage.getItem('state')).filter
            }
            return state
        default:
            return state
    }
}
