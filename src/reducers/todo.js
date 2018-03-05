export const todos = (state = [], action) => {

    switch (action.type) {
        case 'add_item':
            return [
                ...state,
                action.payload
            ]

        case 'toggle_item':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })

        case 'delete_item':
            return state.filter(todo => {
                return todo.id !== action.payload
            })

        case 'load_item':
            if (JSON.parse(localStorage.getItem('state'))) {
                return [
                    ...state,
                    ...JSON.parse(localStorage.getItem('state')).todos
                ]
            }
            return state

        default:
            return state
    }
}
