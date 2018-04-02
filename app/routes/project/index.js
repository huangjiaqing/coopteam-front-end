import React, { Component } from 'react';
import styles from './index.css';
import Header from './Header';

export default class Project extends Component {

  render() {

    return (
      <div className={styles.project}>
        <Header />
      </div>
    );
  }
}