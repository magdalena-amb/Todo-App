import React, {Component} from 'react';
import style from '../css/TodoForm.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state= {
             inputValue: ""
             };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.newTodo(this.state.inputValue);
        this.setState=({
            inputValue: ""
        });
    }  
    render() {
        return(
            <form className={style.TodoForm} onSubmit={this.handleSubmit }>
                <input
                 type="text"
                 placeholder="ex. feed cats"
                 value={this.state.inputValue }
                 onChange={this.handleChange}
                  />
                <button> Add new </button>
            </form>    
        )
    }
}

export default TodoForm;