import React, {Component} from 'react';
import '../App.css';
class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    addTodo = (tasks) => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, tasks],
            newTodo: '',
        }));
    };

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value});
    };

    handleAddTodo = () => {
        if (this.state.newTodo.trim() === '') return;
        this.addTodo(this.state.newTodo);
    };

    removeTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);
        this.setState({todos: updatedTodos});
    };

    render () {
        return (
            <div class='main'>
                <label htmlFor="">
                    Add a New Task: 
                    <br />
                    <input type="text" onChange={this.handleInputChange} value={this.state.newTodo} />
                </label>
                <br />
                <button onClick={this.handleAddTodo}>Add</button>
                <div class='list'>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li keys={index}>
                            {todo} 
                            <button onClick={() => this.removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        );
    }
}

export default Todo