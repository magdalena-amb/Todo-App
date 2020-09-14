import React from 'react';
import styles from '../css/Title.css';

const Title = props =><h1 className={styles.Title}><span>{props.number}</span> {props.title}</h1>;

export default Title;