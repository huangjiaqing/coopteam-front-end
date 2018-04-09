import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import PopoverClose from 'components/popoverClose';
import { Popover, Input, Avatar, Icon } from 'antd';

@PopoverClose
export default class Members extends Component {

  static propTypes = {
    getValue: PropTypes.func
  }

  _getValue(value) {
    const { getValue, closePopover } = this.props;
    getValue && getValue(value);
    closePopover();
  }

  render() {
    const { children, visible } = this.props;

    return (
      <Popover
        {...visible}
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