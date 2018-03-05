import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleItem, deleteItem, loadItem } from '../actions/actions'

const filterList = (todos, filter) => {
    switch (filter) {
        case 'All':
            return todos
        case 'Active':
            return todos.filter(todo => !todo.completed)
        case 'Completed':
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}
const mapStateToProps = state => {
    return {
        todos: filterList(state.todos, state.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => {
            dispatch(deleteItem(id))
        },
        onToggle: (id) => {
            dispatch(toggleItem(id))
        },
        onLoad: () => {
            dispatch(loadItem())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
