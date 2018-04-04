import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './index.css';
import { Icon } from 'antd';

export default class ProjectMenu extends Component {

  static propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    bodyStyle: PropTypes.object,
    closeMenu: PropTypes.func
  }

  render() {
    const { isOpenMenu, bodyStyle={} } = this.props;
    const bodyDisplay = isOpenMenu
      ? {
        width: '29rem',
        transition: 'width 0.25s cubic-bezier(0,1,0.39,1)'
      }
      : {
        width: 0,
        transition: 'width 0.25s cubic-bezier(0,1,0.39,1)'
      };
    const menuStyle = {...bodyStyle, ...bodyDisplay};

    return (
      <div className={styles.projectMenu} style={menuStyle}>
        <div className={isOpenMenu ? '' : styles.noShow}>
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </div>
    );
  }

  renderHeader() {
    const { isOpenMenu, closeMenu } = this.props;

    return (
      <div className={styles.header}>
        <h2>
          项目菜单
        </h2>
        <Icon
          type="close"
          className={styles.closeIcon}
          onClick={closeMenu}
        />
      </div>
    );
  }

  renderBody() {
    return (
      <ul className={styles.body}>
        <li className="can-click">
          <span><Icon type="setting" /></span>
          <span>项目设置</span>
        </li>
        <li className="can-click">
          <span><Icon type="tags-o" /></span>
          <span>标签</span>
        </li>
      </ul>
    );
  }
}