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
    handleSubmit () {
        this.props.newTodo(this.state.inputValue);
    }  
    render() {
        return(
            <div className={style.TodoForm}>
                <input
                 type="text"
                 placeholder="ex. feed cats"
                 value={this.state.inputValue }
                 onChange={this.handleChange}
                  />
                <button onClick={this.handleSubmit} > Add new </button>
            </div>    
        )
    }
}



export default TodoForm;