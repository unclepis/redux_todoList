import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <ul style={{ width: '200px', minHeight: '200px', border: '1px dashed' }}>
            {
                todos.map((todo, index) => {
                    return (
                        <Todo key={index} {...todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
                    )
                })
            }
        </ul>
    )

}
export default TodoList
