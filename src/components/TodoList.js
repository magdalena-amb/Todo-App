import React from 'react';
import style from '../css/TodoList.css';

const TodoList =(props)=> (
    <ul className={style.TodoList}>
        {props.todoItems}
    </ul>
    );
export default TodoList;