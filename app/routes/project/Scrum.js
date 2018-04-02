import React from 'react';
import styles from './scrum.css';

export default function ({ children }) {

  return (
    <div className={styles.scrum}>
      {children}
    </div>
  );
}