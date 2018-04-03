import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './index.css';
import { Popover, Icon } from 'antd';

export default class Priority extends Component {

  static propTypes = {
    getValue: PropTypes.func.isRequired,
    btnStyle: PropTypes.object
  }

  state = {
    selected: 0,
    isShowSelf: true
  }

  _getValue(value) {
    this.props.getValue(value);
    // 选中关掉自身
    setTimeout(() => {
      this.setState({
        selected: value,
        isShowSelf: false,
      }, () => this.setState({
        isShowSelf: true
      }));
    }, 100);
  }

  render() {
    const { selected, isShowSelf } = this.state;
    const visible = isShowSelf ? {} : { visible: false };
    const btnStyle = this.props.btnStyle || {};

    return (
      <Popover
        {...visible}
        trigger="click"
        placement="bottom"
        content={this.renderContent()}
      >
        <span style={btnStyle}>
          {selected === 0
            ? <span className={className(styles.opt, styles.common)}>普通</span>
            : ''}
          {selected === 1
            ? <span className={className(styles.opt, styles.high)}>紧急</span>
            : ''}
          {selected === 2
            ? <span className={className(styles.opt, styles.urgent)}>非常紧急</span>
            : ''}
        </span>
      </Popover>
    );
  }

  renderContent() {
    const { selected } = this.state;

    return (
      <ul className={styles.priority}>
        <li onClick={() => this._getValue(0)}>
          <span className={className(styles.opt, styles.common)}>普通</span>
          {selected === 0 ? <Icon type="check" /> : ''}
        </li>
        <li onClick={() => this._getValue(1)}>
          <span className={className(styles.opt, styles.high)}>紧急</span>
          {selected === 1 ? <Icon type="check" /> : ''}
        </li>
        <li onClick={() => this._getValue(2)}>
          <span className={className(styles.opt, styles.urgent)}>非常紧急</span>
          {selected === 2 ? <Icon type="check" /> : ''}
        </li>
      </ul>
    );
  }
}