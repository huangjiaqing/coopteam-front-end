import React from 'react';
import styles from './scrum.css';

export default function ({ children }) {

  return (
    <ul className={styles.scrum}>
      {children}
    </ul>
  );
}