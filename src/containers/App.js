import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';
import style from '../css/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{ id:1, text:"walk the dog"},{id:2, text:"buy milk"}, {id:3, text:"do the laundry"} ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        console.log(todo);
        const data = [...this.state.data, todo];
        console.log(data);
        // this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        const numTodos = this.state.data.length > 0 ? this.state.data.length : "";
        const title = (this.state.data.length === 0) ? "all done!!!" : "waiting...";
        const todos = this.state.data.map(todo =>(
            <TodoItem 
                key={todo.id}
                text={todo.text} 
                onDelete ={this.removeTodo.bind(this, todo.id)}
            />
        ));
        return (
            <div className={style.TodoApp} >
                <TodoForm newTodo={this.addTodo} />

                <Title  title={title} number={numTodos} />
                
                <TodoList  todoItems={todos}
                />
            </div>
        );
    }
}

export default hot(module)(App);