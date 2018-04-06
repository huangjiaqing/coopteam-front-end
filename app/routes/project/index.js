import React, { Component } from 'react';
import styles from './index.css';
import Header from './Header';
import Board from './Board';
import { observer, inject } from 'mobx-react';

@inject('ProjectStore')
@observer
export default class Project extends Component {

  state = {
    isOpenMenu: false,
  }

  openMenu = (status=true) => {
    this.setState({
      isOpenMenu: status
    });
  }

  closeMenu = () => {
    this.setState({
      isOpenMenu: false
    });    
  }

  componentDidMount() {
    const projectId = this
      .props
      .match
      .params
      .projectId;
    this
      .props
      .ProjectStore
      .getStages(projectId);
  }

  getStages = () => {
    return Array.from(this
      .props
      .ProjectStore
      .stages);
  }

  render() {
    const { isOpenMenu } = this.state;

    return (
      <div className={styles.project}>
        <Header
          isOpenMenu={isOpenMenu}
          onMenuClick={this.openMenu}
        />
        <Board
          isOpenMenu={isOpenMenu}
          closeMenu={this.closeMenu}
          stages={this.getStages()}
        />
      </div>
    );
  }
}