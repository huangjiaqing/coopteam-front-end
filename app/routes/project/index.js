import React, { Component } from 'react';
import styles from './index.css';
import Header from './Header';
import Board from './Board';

export default class Project extends Component {

  state = {
    isOpenMenu: false,
  }

  openMenu = () => {
    this.setState({
      isOpenMenu: true
    });
  }

  closeMenu = () => {
    this.setState({
      isOpenMenu: false
    });    
  }

  render() {
    const { isOpenMenu } = this.state;

    return (
      <div className={styles.project}>
        <Header onMenuClick={this.openMenu} />
        <Board isOpenMenu={isOpenMenu} closeMenu={this.closeMenu}/>
      </div>
    );
  }
}