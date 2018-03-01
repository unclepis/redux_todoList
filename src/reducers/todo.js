export const todos = (state = [], action) => {
    switch (action.type) {
        case 'add_item':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'toggle_item':
            return state.map(todo => {
                if (todo.id === action.id) {
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
                return todo.id !== action.id
            })
        default:
            return state
    }
}
