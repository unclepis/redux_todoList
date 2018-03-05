import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        if (this.props.onLoad) {
            setTimeout(() => {
                this.setState({
                    loading: false
                })
                this.props.onLoad();
            }, 2000)
        }
    }

    render() {
        const { todos, onToggle, onDelete } = this.props;
        return (
            <ul style={{ width: '200px', minHeight: '200px', border: '1px dashed' }}>
                {
                    this.state.loading ? <h1 style={{ display: 'block', width: '40px', height: '40px'}}>Loading...</h1> :
                        todos.map((todo, index) => {
                            return (
                                <Todo key={index} {...todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
                            )
                        })
                }
            </ul>
        )
    }
}
