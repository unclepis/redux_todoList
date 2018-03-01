import React from 'react'

const TodoInput = ({ onAddItem }) => {
    let input;
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        if (onAddItem) {
            onAddItem(input.value);
            input.value = ''
        }
    }
    return (
        <form action='' onSubmit={handleAddTodo}>
            <input type="text" ref={inputNode => { input = inputNode }} />
            <button>Add todo</button>
        </form>
    )
}
export default TodoInput
