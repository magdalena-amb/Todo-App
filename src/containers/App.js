import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ["walk the dog", "buy milk"]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        const numTodos = this.state.data.length;
        return (
            <div className={style.TodoApp}>
                <Title title="Todos" number={numTodos} />
                <TodoList todos={this.state.data} />
            </div>
        );
    }
}

export default App;