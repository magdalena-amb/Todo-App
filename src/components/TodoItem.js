import React from 'react';
import style from '../css/TodoItem.css'

const TodoItem = (props) => (
        <li className={style.TodoItem}>
            {props.text}
            <span onClick={props.onDelete}> x </span>
        </li>      
);   

export default TodoItem;