import React from 'react'
import TodoInput from '../containers/TodoInput'
import TodoList from '../containers/TodoList'
import TodoFilter from '../containers/TodoFilter'

const App = () => {
    return (
        <div>
            <TodoInput />
            <TodoList />
            <TodoFilter />
        </div>
    )
}
export default App
