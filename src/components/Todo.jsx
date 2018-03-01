import React from 'react'

const Todo = ({ text, completed, onDelete, onToggle }) => {
    const textStyle = { textDecoration: completed ? 'line-through' : 'none' };
    return (
        <div style={{ display: 'flex' }}>
            <li style={textStyle} onClick={onToggle}>{text}</li>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo
