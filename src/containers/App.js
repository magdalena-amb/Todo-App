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
            data: [{ id:1, text:"walk the dog", done: false },
            {id:2, text:"buy milk", done: false },
             {id:3, text:"do the laundry", done: false} 
            ]
        };
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
            done: false
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    toggleTodo(toggledTodo) {
        const todos = this.state.data.map(t =>
            ( t.id === toggledTodo.id ) ? {...t, done: !t.done } : t
            )
            this.setState( {data : todos})
            
    }
    render() {
        const numTodos = this.state.data.length > 0 ? this.state.data.length : "";
        const title = (this.state.data.length === 0) ? "all done!!!" : "waiting...";
        const todos = this.state.data.map(todo =>(
            <TodoItem 
                key={todo.id}
                text={todo.text} 
                onDelete ={this.removeTodo.bind(this, todo.id)}
                onToggle={this.toggleTodo.bind(this, todo)}
                done={todo.done}
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