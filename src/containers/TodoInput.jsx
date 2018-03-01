import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import { addItem } from '../actions/actions'

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: (text) => {
            dispatch(addItem(text))
        }
    }
}
const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoInput)
