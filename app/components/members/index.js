import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import { Popover, Input, Avatar, Icon } from 'antd';

export default class Members extends Component {

  static propTypes = {
    getValue: PropTypes.func
  }

  state = {
    visible: true
  }

  closeSelf() {
    setTimeout(() => {
      this.setState({
        visible: false
      }, () => {
        this.setState({
          visible: true
        });
      });
    }, 100);
  }

  _getValue(value) {
    const { getValue } = this.props;
    getValue && getValue(value);
    this.closeSelf();
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    const _visible = visible ? {} : {visible: false};

    return (
      <Popover
        {..._visible}
        trigger="click"
        placement="bottom"
        content={this.renderContent()}
      >
        {children}
      </Popover>
    );
  }

  renderContent() {
    return (
      <div className={styles.members}>
        <div className={styles.search}>
          <Input placeholder="查找成员" />
        </div>
        <ul className={styles.list}>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </ul>
      </div>
    );
  }

  renderItem() {

    return (
      <li
        className={styles.item}
        onClick={() => this._getValue(1)}
      >
        <span>
          <Avatar icon="user" size="small" />
        </span>
        <span>
          黄嘉庆
        </span>
        <span>
          <Icon type="check" style={{ fontSize: '1.4rem' }}/>
        </span>
      </li>
    );
  }
}