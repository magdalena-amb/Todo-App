import React from 'react';
import style from '../css/TodoItem.css'

const TodoItem = (props) => (
        <li className={style.TodoItem}>
            <span style={
                {textDecoration: props.done ? 'line-through' : 'none',
                color: '#000'
                }
            }  
            onClick= {props.onToggle}>
                {props.text}
            </span>
            
            <span onClick={props.onDelete}> x </span>
        </li>      
);   

export default TodoItem;