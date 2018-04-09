import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import PopoverClose from 'components/popoverClose';
import styles from './index.css';
import { Popover, Icon } from 'antd';

@PopoverClose
export default class Priority extends Component {

  static propTypes = {
    getValue: PropTypes.func.isRequired,
    btnStyle: PropTypes.object,
  }

  state = {
    selected: 1,
  }

  _getValue(value) {
    const { getValue, closePopover } = this.props;
    this.setState({
      selected: value
    }, () => {
      getValue(value);
      closePopover();
    });
  }

  render() {
    const { selected } = this.state;
    const { btnStyle={}, visible } = this.props;

    return (
      <Popover
        {...visible}
        trigger="click"
        placement="bottom"
        content={this.renderContent()}
      >
        <span style={btnStyle}>
          {selected === 1 && <span className={className(styles.opt, styles.common)}>普通</span>}
          {selected === 2 && <span className={className(styles.opt, styles.high)}>紧急</span>}
          {selected === 3 && <span className={className(styles.opt, styles.urgent)}>非常紧急</span>}
        </span>
      </Popover>
    );
  }

  renderContent() {
    const { selected } = this.state;

    return (
      <ul className={styles.priority}>
        <li onClick={() => this._getValue(1)}>
          <span className={className(styles.opt, styles.common)}>普通</span>
          {selected === 1 && <Icon type="check" />}
        </li>
        <li onClick={() => this._getValue(2)}>
          <span className={className(styles.opt, styles.high)}>紧急</span>
          {selected === 2 && <Icon type="check" />}
        </li>
        <li onClick={() => this._getValue(3)}>
          <span className={className(styles.opt, styles.urgent)}>非常紧急</span>
          {selected === 3 && <Icon type="check" />}
        </li>
      </ul>
    );
  }
}