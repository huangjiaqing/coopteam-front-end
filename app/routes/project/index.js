import React, { Component } from 'react';
import styles from './index.css';
import Header from './Header';
import Board from './Board';

export default class Project extends Component {

  render() {

    return (
      <div className={styles.project}>
        <Header />
        <Board />
      </div>
    );
  }
}