import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { filterItem } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        active: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchFilter: (filter) => {
            dispatch(filterItem(filter))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)
