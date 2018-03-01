import React from 'react'

const TodoFilter = ({ active, onSwitchFilter }) => {
    const filterType = ['All', 'Active', 'Completed'];
    const handleSwitchFilter = (e, filter) => {
        e.preventDefault();
        if (onSwitchFilter) {
            onSwitchFilter(filter);
        }
    }
    return filterType.map((filter, index) => {
        if (filter === active) {
            return (<span style={{ marginRight: '5px' }} onClick={(e) => handleSwitchFilter(e, filter)} key={index}>{filter}</span>)
        } else {
            return (<a style={{ marginRight: '5px' }} onClick={(e) => handleSwitchFilter(e, filter)} key={index} href="">{filter}</a>)
        }
    })
}
export default TodoFilter
